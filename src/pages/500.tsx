import styles from "@/styles/Error404.module.css";
import { NextRouter, useRouter } from "next/router";

export default function Error500() {
    const router: NextRouter = useRouter();
    return (
        <div className={styles.error404Wrapper}>
            <h1>500</h1>
            <p>Internal Server Error</p>
            <div className={styles.error404Button} onClick={() => router.reload()}>Reload page</div>
        </div>
    );
};