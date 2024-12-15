import { IPost } from "./types/index";

export function renderPosts(target: HTMLElement, posts: IPost[]): void {
  target.innerHTML = posts
    .map((post) => `
      <div class="post">
        <h3>${post?.id}. ${post?.title}</h3>
        <p>${post?.body}</p>
      </div>
    `)
    .join('');
}