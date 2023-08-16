import { useState } from "react";
import ActionsBar from "../ActionsBar";
import styles from '@/styles/Post.module.css';
import { IPostProps } from "@/types/props";

export default function InfoContainer({ post }: IPostProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <>
            <ActionsBar isLiked={isLiked} setLiked={setIsLiked}/>
            <div className={styles.post234Description}>
                <p className={styles.post234LikesCount}>{post.likesCount + Number(isLiked)} likes</p>
                {!!post.description && <p className={styles.post234DescriptionPara}>{post.description}</p>}
            </div>
        </>
    );
};