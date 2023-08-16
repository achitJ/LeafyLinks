import styles from '@/styles/Post.module.css';
import { IPostProps } from '@/types/props';
import Image from 'next/image';
import Link from 'next/link';
import PostImage from '@/common/PostImage';
import ActionsBar from './ActionsBar';
import InfoContainer from './InfoContainer';

export default function Post({ post }: IPostProps) {
    return (
        <>
            <div className={styles.post234Container}>
                <div className={styles.post234Header}>
                    <Image  
                        loading='lazy'
                        src={post.userImage} 
                        alt={`${post.username}`} 
                        width={32}
                        height={32}
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                    <Link href={`/user/${post.username}`}>
                        <p className={styles.post234UserName}>{post.username}</p>
                    </Link>
                    {location && <p className={styles.post234Location}>{post.location}</p>}
                </div>
                <div style={{
                    position: "relative", 
                    height: 'auto',
                    minWidth: '350px', 
                    aspectRatio: '9/10'
                }}>
                    <PostImage post={post} />
                </div>
                <InfoContainer post={post} />                
            </div>
        </>
    );
}