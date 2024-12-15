import { fetchData } from './api';
import { renderPosts } from './render';
import {
  store, DELAY, API_URL, POSTS_PER_PAGE,
  loading, filterInput, postsContainer } from './constants';

async function downloadPosts(): Promise<void> {
  const { filterString, page } = store;
  const queryFilter = filterString.length ? `&title_like=${filterString}` : '';
  const url = `${API_URL}?_page=${page}&_limit=${POSTS_PER_PAGE}${queryFilter}`;

  store.isLoading = true;
  loading.classList.remove('hide');
  const posts = await fetchData(url) as unknown;

  if (Array.isArray(posts)) {
    if (!posts.length) {
      store.isPostsOver = true;
    }
    store.allPosts.push(...posts);
    renderPosts(postsContainer, store.allPosts);
  }
    
  loading.classList.add('hide');
  store.isLoading = false;
  store.page++;
}

function handleScroll(): void {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;  
  if (!store.isPostsOver && !store.isLoading && scrollTop + clientHeight >= scrollHeight - clientHeight / 2 - 100) {
    downloadPosts();
  }
}

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  store.page = 1;
  store.allPosts = [];
  store.isPostsOver = false;
  store.filterString = target.value;

  clearTimeout(store.timeoutId);
  store.timeoutId = setTimeout(() => {
    downloadPosts();
    clearTimeout(store.timeoutId);
  }, DELAY);
}

window.addEventListener('load', () => downloadPosts());

window.addEventListener('scroll', handleScroll);

filterInput.addEventListener('input', handleInput);