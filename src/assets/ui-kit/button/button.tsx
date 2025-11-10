'use client';

import clsx from 'clsx';
import styles from './button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Spinner from '../spinner/spinner'; // Импортируем спиннер

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'classic' | 'contrast' | 'accent' | 'empty' | 'alternative' | 'brand';
  border?: 'classic' | 'rounded';
  animation?: 'none' | 'scale';
  invert?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'bg';
  loading?: boolean; // Добавляем пропс loading
}

export default function Button({
  children,
  variant = 'classic',
  border = 'classic',
  animation = 'none',
  size = 'md',
  invert = false,
  fullWidth = false,
  loading = false, // Значение по умолчанию
  className,
  disabled,
  ...props
}: ButtonProps) {
  // Комбинируем disabled состояния
  const isDisabled = disabled || loading;

  return (
    <>
      <button
        className={clsx(
          styles.button,
          {
            [styles.accent]: variant === 'accent',
            [styles.contrast]: variant === 'contrast',
            [styles.empty]: variant === 'empty',
            [styles.alternative]: variant === 'alternative',
            [styles.brand]: variant === 'brand',
            [styles.rounded]: border === 'rounded',
            [styles.scale]: animation === 'scale',
            [styles.invert]: invert,
            [styles.fullWidth]: fullWidth,
            [styles.sm]: size === 'sm',
            [styles.bg]: size === 'bg',
            [styles.loading]: loading, // Добавляем класс для состояния загрузки
          },
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <div className={styles.loadingContent}>
            <Spinner size="sm" />
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}