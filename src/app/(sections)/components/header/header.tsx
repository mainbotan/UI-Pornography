import clsx from 'clsx';
import styles from './header.module.scss';
import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import Arrow from '@/assets/ui-kit/icons/arrow';
import Menu from '@/assets/ui-kit/icons/menu';
import Button from '@/assets/ui-kit/button/button';

export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.focus}>
                    <section className={clsx(styles.box, styles.logo)}>Matrix</section>
                    <section className={clsx(styles.box, styles.sections)}>
                        <section className={clsx(styles.section, styles.marker)}><Arrow className={styles.svg} /></section>
                        <section className={styles.section}>Интеграции</section>
                        <section className={styles.section}>Модули</section>
                        <section className={styles.section}>Разработчикам</section>
                        <section className={styles.section}>Тарифы</section>
                    </section>
                    <section className={clsx(styles.box, styles.actions)}>
                        <Button className={styles.action} variant='brand'>Войти</Button>
                        <Button className={styles.action}>Создать аккаунт</Button>
                    </section>
                    <section className={clsx(styles.box, styles.burger)}><span className={styles.frame}><Menu className={styles.svg}></Menu></span></section>
                </div>
            </header>
        </>
    );
}