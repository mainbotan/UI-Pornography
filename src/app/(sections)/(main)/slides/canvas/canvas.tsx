import styles from './canvas.module.scss';
import I from './components/i/i';
import U from './components/u/u';

export default function Canvas() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.block}>
                    <U /><I /><div className={styles.line}>Pornography</div>
                </div>
                <div className={styles.logo}>
                    Matrix <span className={styles.contrast}>One</span>
                </div>
            </div>
        </div>
    )
}