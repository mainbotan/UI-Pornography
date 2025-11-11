import styles from './block.module.scss';
import LineWithCurves from './line-with-curves/line-with-curves';

export default function Block() {
    return (
        <div className={styles.block}>
            <div className={styles.canvas}>
                
            </div>
            <svg className={styles.grid} viewBox="0 0 588 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.path} d="M80 13V431M143 35V399M205 13V431M266 21V367M328 431V26M391 0V404M456 13V438M522 424V35M34 393H552M7 337H588M19 275H567M0 210H541M562 155H34M13 94H541" />
            </svg>
        </div>
    )
}