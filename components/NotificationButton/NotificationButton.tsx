'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { NotificationIcon } from '../Icons/NotificationIcon';

type NotificationButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export function NotificationButton(props: NotificationButtonProps) {
  return (
    <button {...props}>
      <NotificationIcon />
    </button>
  );
}
