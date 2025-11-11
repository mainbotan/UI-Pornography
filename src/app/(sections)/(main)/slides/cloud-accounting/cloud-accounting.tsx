import Container from '@/app/(sections)/components/container/container';
import styles from './cloud-accounting.module.scss';
import Block from './block/block';

export default function CloudAccounting() {
    return (
        <Container className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.about}>
                    <div className={styles.title}>
                        Учёт и планирование в облаке.
                    </div>
                    <div className={styles.about}>
                        Учёт и планирование в облаке.
                    </div>
                </div>
                <Block />
            </div>
        </Container>
    )
}