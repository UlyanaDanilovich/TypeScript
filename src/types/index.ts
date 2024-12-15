export interface Store {
    isLoading: boolean;
    isPostsOver: boolean;
    page: number;
    filterString: string;
    allPosts: IPost[];
    timeoutId: number | undefined;
}

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}