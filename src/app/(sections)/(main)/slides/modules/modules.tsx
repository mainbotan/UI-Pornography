import Container from '@/app/(sections)/components/container/container';
import styles from './modules.module.scss';

export default function Modules() {
    return (
        <Container className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <div className={styles.title}>
                            Повысьте эффективность бизнеса 
                            за <span className={styles.contrast}>30 дней.</span>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>
                            Учёт и планирование
                            <span className={styles.contrast}>в облаке.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    
                </div>
            </div>
        </Container>
    )
}