import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
};

export default function Button({ className, variant = 'primary', ...rest }: Props) {
  const base = 'btn';
  const styles = {
    primary: 'btn-primary',
    ghost: 'btn hover:bg-muted',
    outline: 'btn border border-zinc-300 dark:border-zinc-700 hover:bg-muted',
  } as const;
  return <button className={clsx(base, styles[variant], className)} {...rest} />;
}
