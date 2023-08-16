import { useGlobalStore } from '@/store/global';
import styles from '@/styles/ThemeToggleButton.module.css';
import { useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggleButton() {
    const isDarkMode = useGlobalStore(state => state.darkMode);
    const toggleDarkMode = useGlobalStore(state => state.toggleDarkMode);

    useEffect(() => {
		useGlobalStore.persist.rehydrate();
	}, []);

	useEffect(() => {
		console.log('isDarkMode', isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <>
            <div className={styles.ttb645CheckboxContainer}>
                <input 
                    type="checkbox" 
                    className={styles.ttb645Checkbox} 
                    id="checkbox" 
                    defaultChecked={isDarkMode} 
                    onClick={() => toggleDarkMode()}
                />
                <label htmlFor="checkbox" className={styles.ttb645CheckboxLabel}>
                    <BsMoon className={styles.ttb645MoonIcon} />
                    <BsSun className={styles.ttb645SunIcon} />
                    <span className={styles.ttb645BallIcon}></span>
                </label>
            </div>
        </>
    );
};