import UserInformation from "@/components/UserInformation";
import { useUserStore } from "@/store/user";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

export default function UserPage() {
    const router: NextRouter = useRouter();
    const { id } = router.query;

    const getUserDetails = useUserStore(state => state.getUserDetails);
    const getUserPosts = useUserStore(state => state.getUserPosts);

    useEffect(() => {
        if (!id || typeof id !== "string") return;

        getUserDetails(id as string)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });

        getUserPosts(id as string)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
    }, [id]);

    const user = useUserStore(state => state.details);
    const posts = useUserStore(state => state.posts);
    const error = useUserStore(state => state.error);

    return (
        <>
            {user && <UserInformation error={error} user={user} posts={posts} getUserPosts={getUserPosts}/>}
        </>
    );
}