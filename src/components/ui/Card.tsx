import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = HTMLAttributes<HTMLDivElement> & { title?: ReactNode; footer?: ReactNode };

export default function Card({ className, title, footer, children, ...rest }: Props) {
  return (
    <div className={clsx('card', className)} {...rest}>
      {title ? <div className="mb-3 text-lg font-semibold">{title}</div> : null}
      <div>{children}</div>
      {footer ? <div className="mt-4 text-sm opacity-80">{footer}</div> : null}
    </div>
  );
}
