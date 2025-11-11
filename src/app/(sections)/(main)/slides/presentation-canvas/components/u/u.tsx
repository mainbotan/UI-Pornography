import { ReactNode } from 'react';
import styles from './u.module.scss';
import clsx from 'clsx';
import { url } from 'inspector';

interface UProps {
  className?: string;
}

export default function U({
  className = ''
}: UProps) {
  return (
    <div className={clsx(styles.frame, className)}>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-1.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-2.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-3.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-4.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-6.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-7.jpg)'}}><div className={styles.blur} /></div>
        <div className={clsx(styles.block)} style={{backgroundImage: 'url(/images/logo/u/i-8.jpg)'}}><div className={styles.blur} /></div>
    </div>
  );
}