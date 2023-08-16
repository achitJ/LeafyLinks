export interface IBaseLayoutProps {
    children: ReactNode;
};

export interface IPostProps {
    post: IPost;
};

export interface IPostListProps {
    posts: IPost[];
    getPage: () => Promise<void>;
    username?: string;
    checkHydration?: () => boolean;
    rehydrate?: () => Promise<void> | void;
    getCache?: () => void;
    error: IErrorState | null;
};

export interface IUserInformationProps {
    user: IUser;
    posts: IPost[];
    getUserPosts: (usename?: string) => Promise<void>;
    error: IErrorState | null;
};

export interface IProfileInfoContainerProps {
    user: IUser;
};

export interface IPostGridProps {
    posts: IPost[];
    getUserPosts: (usename?: string) => Promise<void>;
    error: IErrorState | null;
};

export interface IPostContainerProps {
    post: IPost;
};

export interface IViewButtonProps {
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
};

export interface IPostImageProps {
    post: IPost;
};

export interface IActionsBarProps {
    isLiked: boolean;
}