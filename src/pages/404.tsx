import styles from "@/styles/Error404.module.css";
import Link from "next/link";

export default function Error404() {
    return (
        <div className={styles.error404Wrapper}>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href="/" className={styles.error404Button}>Go back to Feed Page</Link>
        </div>
    );
}