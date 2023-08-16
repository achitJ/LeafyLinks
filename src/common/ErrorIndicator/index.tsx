import { IErrorState } from '@/types/misc';
import styles from '@/styles/ErrorIndicator.module.css';
import { usePostsStore } from '@/store/posts';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ErrorIndicator({
    error,
    getCache
} : {
    error: IErrorState,
    getCache?: () => void
}) {
    return (
        <div className={styles.error534ButtonWrapper}>
            <h2>{error?.message}</h2>
            {!(error.status && error.status === 404 || !getCache) ? 
                <button className={styles.error534Button} onClick={() => getCache()}>
                    Load Stale Data
                </button> :
                null
            }
        </div>
    );
}