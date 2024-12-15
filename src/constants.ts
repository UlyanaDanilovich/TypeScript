import { Store } from "./types/index";

export const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const POSTS_PER_PAGE = 10;
export const DELAY = 500;

export const store: Store = {
  isLoading: true,
  isPostsOver: false,
  page: 1,
  filterString: '',
  allPosts: [],
  timeoutId: undefined,
};

export const loading = document.getElementById('loading-indicator') as HTMLElement;
export const filterInput = document.getElementById('filter-input') as HTMLInputElement;
export const postsContainer = document.getElementById('posts-container') as HTMLElement;
