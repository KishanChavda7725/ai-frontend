import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...rest }: Props) {
  return (
    <input
      className={clsx(
        'w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      {...rest}
    />
  );
}
