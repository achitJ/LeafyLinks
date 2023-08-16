import { getPosts } from '@/api/userPost';
import { IErrorState, IPost, IUser, IUserProfile } from '@/types/misc';
import { create } from 'zustand';

type UserState = {
    details: IUser | null,
    posts: IPost[],
    page: number,
    error: IErrorState | null,
    getUserDetails: (username: string) => Promise<void>,
    getUserPosts: (username?: string) => Promise<void>,
    setUserDetails: (user: IUserProfile) => void,
};

export const useUserStore = create<UserState>()(
    (set, get) => ({
        details: null,
        posts: [],
        page: 1,
        error: null,
        getUserDetails: async (username) => {
            const porifleDetailsResponse = await fetch(`/api/user?username=${username}`);
            const profileDetails = await porifleDetailsResponse.json();

            set({
                details: profileDetails
            });
        },
        getUserPosts: async (username) => {
            if(!username) return;

            if(username !== get().details?.username) {
                set({
                    posts: [],
                    page: 1
                });
            } 

            const page = get().page;
            const prevPosts = get().posts;
            let posts: IPost[] = [];

            try {
                const response = await getPosts(page, 12, username);
                
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


            set({
                posts: [...prevPosts, ...posts],
                page: page + 1
            });
        },
        setUserDetails: (user) => set({
            details: user.details,
            posts: user.posts
        })
    })
);