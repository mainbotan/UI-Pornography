import clsx from 'clsx';
import styles from './system-status.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';

export default function SystemStatusBar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <div className={clsx(styles.box, styles.widgetArea)}>
                        <div className={clsx(styles.widget, styles.normal)}>Проблем не обнаружено</div>
                    </div>
                    <div className={clsx(styles.box, styles.hint)}>
                        Статус позволяет понять, какие модули мы обслуживаем в данный момент. <br />
                    </div>
                </div>
            </div>
        </>
    );
}