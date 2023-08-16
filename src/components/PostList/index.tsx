import Post from '@/components/PostList/Post';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { IPost } from '@/types/misc';
import { IPostListProps } from '@/types/props';
import LoadingIndicator from '../../common/LoadingIndicator';
import ErrorIndicator from '@/common/ErrorIndicator';

export default function PostList({ 
    posts, 
    getPage,
    username,
    checkHydration,
    rehydrate,
    getCache,
    error
}: IPostListProps) {
	const {ref, scrollRef} = useInfiniteScroll<IPost>(
		getPage, 
		posts, 
        username,
		checkHydration,
        rehydrate
	);

    const postElements = posts.map((post, idx) => {
        return (
            <div 
                ref={(idx + 1 === posts.length - 10) && !username ? scrollRef : null} 
                key={`${post.id}`}
            >
                <Post post={post}/>
            </div>
        );
    });
    
    return (
        <div>
			{postElements}
			<div ref={ref}>
				{!error ? <LoadingIndicator /> : <ErrorIndicator getCache={getCache} error={error}/>}
			</div>
		</div>
    );
};

