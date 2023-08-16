import styles from '@/styles/ViewButton.module.css';
import { IViewButtonProps } from '@/types/props';
import { BsGrid, BsList } from 'react-icons/bs';

export default function ViewButton({ view, setView }: IViewButtonProps) {
    const handleClick = () => {
        setView(!view);
    };
    
    return (
        <>
            <button className={styles.vtb932Container} onClick={handleClick}>
                <div className={styles.vtb932Icon}>
                    {view ? <BsGrid /> : <BsList />}
                </div>
                <div className={styles.vtb932ButtonText}>
                    {view ? 'Grid' : 'List'}
                </div>
            </button>
        </>
    );
};