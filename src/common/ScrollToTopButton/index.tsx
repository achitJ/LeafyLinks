import styles from '@/styles/ScrollToTopButton.module.css';
import { useEffect, useRef } from 'react';

export default function ScrollToTopButton() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(ref.current !== null) {
            window.addEventListener('scroll', onScroll);

            return () => {
                window.removeEventListener('scroll', onScroll);
            }
        }
    }, [ref]);

    function onScroll() {
        if(window !== undefined) {
            if(window.scrollY > 100) {
                ref.current!.classList.remove("hidden");
            } else {
                ref.current!.classList.add("hidden");
            }
        }
    }

    function handleClick() {
        if(window !== undefined) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    return (
        <div ref={ref} className={`${styles.sttb387ButtonContainer} hidden`}>
            <button className={styles.sttb387Button} onClick={handleClick}>
                <svg height="1.2em" className={styles.sttb387ArrowSymbol} viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                <p className={styles.sttb387Tooltip}>Back to Top</p>
            </button>
        </div>
    )
}