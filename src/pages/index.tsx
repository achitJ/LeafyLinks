import PostList from '@/components/PostList'
import { usePostsStore } from '@/store/posts';

export default function Home() {
	const getPage = usePostsStore((state) => state.getPage);
	const posts = usePostsStore((state) => state.posts); // setting up subscriber
	const checkHydration = usePostsStore.persist?.hasHydrated;
	const getCache = usePostsStore((state) => state.getCache);
	const rehydrate = usePostsStore.persist?.rehydrate;
	const error = usePostsStore((state) => state.error);

	return (
		<PostList 
			posts={posts} 
			getPage={getPage} 
			getCache={getCache}
			checkHydration={checkHydration}
			rehydrate={rehydrate}
			error={error}
		/>
	)
}