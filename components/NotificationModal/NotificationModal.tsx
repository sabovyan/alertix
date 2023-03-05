'use client';

import { useRef } from 'react';
import { Modal } from '../Modal/Modal';
import { NotificationButton } from '../NotificationButton/NotificationButton';

type NotificationProps = {
  pageId: string;
};

export function NotificationModal({ pageId }: NotificationProps) {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleClick = () => {
    const dialog = ref.current;

    if (dialog) {
      dialog.showModal();
    }
  };

  return (
    <div>
      <NotificationButton onClick={handleClick} />
      <Modal ref={ref} pageId={pageId} />
    </div>
  );
}
