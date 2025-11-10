import { ReactNode } from 'react';
import styles from './i.module.scss';
import clsx from 'clsx';
import { url } from 'inspector';

interface UProps {
  className?: string;
}

export default function I({
  className = ''
}: UProps) {
  return (
    <div className={clsx(styles.frame, className)}>
        <div className={clsx(styles.block)}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)}><div className={styles.blur} /></div>
    </div>
  );
}