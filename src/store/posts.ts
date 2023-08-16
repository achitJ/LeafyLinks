import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IErrorState, IPost } from '@/types/misc'
import { getPosts } from '@/api/posts'

type PostsState = {
    posts: IPost[],
    page: number,
    error: IErrorState | null,
    cachedPosts: IPost[],
    setPosts: (posts: IPost[]) => void,
    getPosts: () => IPost[],
    getCache: () => void,
    getPage: () => Promise<void>,
}

export const usePostsStore = create<PostsState>()(
    persist(
        (set, get) => ({
            posts: [],
            page: 1,
            error: null,
            cachedPosts: [],
            setPosts: (posts) => set({ posts }),
            getPosts: () => get().posts,
            getCache: () => {
                set({ posts: get().cachedPosts });
            },
            getPage:  async () => {
                const page = get().page;
                const prevPosts = get().posts;
                let posts: IPost[] = [];
                
                try {
                    const response = await getPosts(page, 10);
                    
                    if(response && response instanceof Array) {
                        posts = response;
                    } else if(response && response.message) {
                        set({ error: { 
                            message: response.message, 
                        }});

                        return;
                    }
                    else if(response && response.status) {
                        set({ error: { 
                            message: response.message, 
                            status: response.status 
                        }});

                        return;
                    }
                } catch(error) {
                    console.log("error", error);
                }

                if(posts.length === 0) {
                    set({
                        error: {
                            message: 'No more posts',
                            status: 404
                        }
                    })

                    return;
                }

                //cache last 50 posts
                const cachedPosts = get().cachedPosts;
                let newCachedPosts = [...cachedPosts, ...posts];
                const cachedPostsLength = newCachedPosts.length;

                //get last 50 posts
                if(cachedPostsLength > 50) {
                    newCachedPosts = newCachedPosts.slice(cachedPostsLength - 50, cachedPostsLength);
                }

                set({ 
                    posts: [...prevPosts, ...posts],
                    page: page + 1,
                    cachedPosts: newCachedPosts,
                    error: null
                });
            }
        }),
        {
            name: 'posts-storage',
            storage: createJSONStorage(() => localStorage),
            skipHydration: true,
            partialize: (state) => ({cachedPosts: state.cachedPosts})
        }
    )
)