import clsx from 'clsx';
import styles from './system-status.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';
import Link from 'next/link';

export default function SystemStatusBar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <div className={clsx(styles.box, styles.widgetArea)}>
                        <Link href='/system-status' className={clsx(styles.widget, styles.problem)}>Частичное нарушение</Link>
                    </div>
                    <div className={clsx(styles.box, styles.hint)}>
                        Статус позволяет понять, какие модули мы обслуживаем в данный момент. <br />
                    </div>
                </div>
            </div>
        </>
    );
}