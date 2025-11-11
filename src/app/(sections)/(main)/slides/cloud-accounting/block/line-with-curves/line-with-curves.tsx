import styles from './line-with-curves.module.scss';

export default function LineWithCurves() {
    return (
        <svg 
            className={styles.container} 
            viewBox="0 0 44 378" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Основная линия */}
            <path 
                className={`${styles.mainLine} ${styles.animatedPath}`}
                d="M0.587113 377.011L0.587113 0.0112762" 
            />
            
            {/* Первый усик (верхний) */}
            <path 
                className={`${styles.whisker1} ${styles.animatedPath}`}
                d="M0.587113 0.0112762C-0.412887 44.3446 6.78711 139.011 43.5871 139.011" 
            />
            
            {/* Второй усик (нижний) */}
            <path 
                className={`${styles.whisker2} ${styles.animatedPath}`}
                d="M0.587113 168.011C-0.412887 212.345 6.78711 301.011 43.5871 301.011" 
            />
        </svg>
    );
}