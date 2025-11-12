'use client';

import clsx from 'clsx';
import Container from '../components/container/container';
import styles from './page.module.scss';
import Calendar from './calendar/calendar';

export default function Page() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.focus}>
                    <section className={styles.info}>
                        <div className={styles.title}>Системный статус <span className={styles.contrast}>Matrix</span></div>
                        <div className={styles.description}>
                            Мы ежедневно проверяем работоспособность всех модулей Matrix и показываем вам графики работоспобности каждого компонента системы.
                            Информация может быть полезна системным администраторам и интеграторам.
                        </div>
                    </section>
                    <section className={clsx(styles.currentStatus, styles.normal)}>
                        <div className={styles.capture}>Текущий статус</div>
                        <div className={styles.status}>Повреждений не обнаружено</div>
                    </section>
                    <section className={styles.sections}>
                        <section className={styles.section}>
                            <div className={styles.capture}>Управление клиентами <span className={styles.secondary}>CRM</span></div>
                            <Calendar />
                            <div className={styles._meta}>прошедший месяц</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.capture}>Складской учёт <span className={styles.secondary}>IC</span></div>
                            <Calendar />
                            <div className={styles._meta}>прошедший месяц</div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.capture}>Управление цепочками поставок <span className={styles.secondary}>SCM</span></div>
                            <Calendar />
                            <div className={styles._meta}>прошедший месяц</div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}