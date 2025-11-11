import MatrixFullLogo from '@/assets/matrix/matrix-full-logo/matrix-full-logo';
import styles from './canvas.module.scss';
import I from './components/i/i';
import U from './components/u/u';

export default function PresentationCanvas() {
    return (
        <div className={styles.container}>
            <div className={styles.focus}>
                <div className={styles.logo}><MatrixFullLogo /></div>
                <div className={styles.capture}><span className={styles.contrast}>59%</span> <span className={styles.primary}>учётных<br /> потребностей<br /> МСБ</span></div>
            </div>
        </div>
    )
}