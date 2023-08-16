import { Ref, useEffect, useRef, useState } from "react";
import useIntersection from "./useIntersection";

export default function useInfiniteScroll<T>(
    nextPage: (username?: string) => Promise<void>,
    list: T[],
	username?: string,
    checkHydration?: () => boolean,
	rehydrate?: () => void | Promise<void>
) : {
    ref: Ref<HTMLDivElement>;
    scrollRef: Ref<HTMLDivElement>;
} {
    const [isIntersecting, ref] = useIntersection<HTMLDivElement>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if(rehydrate) { 
			rehydrate();
		}
	}, []);

	useEffect(() => {
		if (isIntersecting && !isLoading) {
            if(checkHydration && !checkHydration()) return;

			setIsLoading(true);

			if(username) {
				nextPage(username).then(() => {
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
			} else {
				nextPage().then(() => {
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
			}

		}
	}, [isIntersecting]);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'instant' });
		}
	}, [list]);

    return { ref, scrollRef };
}