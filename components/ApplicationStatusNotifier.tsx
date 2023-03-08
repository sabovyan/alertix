'use client';

import { useEffect, useState } from 'react';
import { Alert } from './Alert/Alert';

export function ApplicationStatusNotifier() {
  const [notifications, setNotification] = useState<
    { content: any; action?: Function }[]
  >([]);

  useEffect(() => {
    if (!('Notification' in window)) {
      // do something
      setNotification([
        {
          content: "your browser doesn't support Notifications",
        },
      ]);
    } else {
      if (Notification.permission === 'denied') {
        // console.log('"first"', 'first');

        setNotification((prev) => [
          ...prev,
          {
            content: 'your notifications are turned off',
          },
        ]);
      }
    }
  }, []);

  return (
    <>
      {notifications.map((notification, idx) => {
        return <Alert key={idx} content={notification.content} />;
      })}
    </>
  );
}
