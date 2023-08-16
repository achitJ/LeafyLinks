import { IPostContainerProps } from "@/types/props";
import styles from "@/styles/PostContainer.module.css";
import PostImage from "@/common/PostImage";

export default function PostContainer({ post }: IPostContainerProps) {
    return (
        <div className={styles.postContainer689GalleryItem} tabIndex={0}>
            <PostImage post={post} />
        </div>
    )
};