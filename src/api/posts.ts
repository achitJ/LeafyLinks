import { IErrorMessage, IPost } from "@/types/misc";

export async function getPosts(
    page: Number,
    limit: Number
): Promise<IPost[] | IErrorMessage | void>{

    try {
        const response = await fetch(`/api/posts?page=${page}&limit=${limit}`);
    
        if(!response.ok) {
            const message = await response.text();
            return {
                status: response.status,
                message
            } as IErrorMessage;
        }
    
        const data: IPost[] = await response.json();
    
        return data;
    } catch(error) {
        if(error instanceof Error)
            return { message: error.message } as IErrorMessage;
    }
}