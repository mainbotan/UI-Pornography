import clsx from 'clsx';
import styles from './feedback.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';

export default function FeedbackBar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <div className={clsx(styles.box, styles.info)}>
                        <div className={styles.capture}>-45% стоимости подписки за первый месяц.</div>
                        <div className={styles.text}>
                            Откажититесь уже от заёбных таблиц и сэкономьте время менеджера. <br />Епта, на дворе 2026 год.
                        </div>
                    </div>
                    <div className={clsx(styles.box, styles.active)}>
                        <Button className={styles.action}>Смотреть тарифы</Button>
                    </div>
                </div>
            </div>
        </>
    );
}