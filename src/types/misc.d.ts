export interface IPost {
    id: string;
    userImage: string;
    postImage: string;
    username: string;
    likesCount: number;
    description: string | null;
    location: string | null;
    blurHash: string;
    height: number;
    width: number;
    isLiked: boolean;
};

export interface IProfileImage {
    small: string;
    medium: string;
    large: string;
}

export interface IUser {
    id: string;
    username: string;
    name: string;
    bio: string;
    location: string;
    total_photos: number;
    followers_count: number;
    following_count: number;
    profile_image: IProfileImage;
};

export interface IUserProfile {
    details: IUser;
    posts: IPost[];
};

export interface IErrorMessage extends Error {
    message: string;
    status?: number;
};


interface IErrorState {
    message: string,
    status?: number
}