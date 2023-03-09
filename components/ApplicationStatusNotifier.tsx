'use client';

import { useEffect, useState } from 'react';
import { Alert, AlertProps } from './Alert/Alert';

export function ApplicationStatusNotifier() {
  const [notifications, setNotification] = useState<AlertProps[]>([]);

  const addNotSupportedBrowserAlert = () => {
    return {
      id: crypto.randomUUID(),
      content: "your browser doesn't support Notifications",
    };
  };

  const addDisabledNotificationAlert = () => {
    return {
      id: crypto.randomUUID(),
      content: 'your notifications are turned off',
      action: {
        title: 'Enable',
        handler: (id: string) => async () => {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') {
            setNotification((prev) => {
              return prev.map((prevNote) =>
                prevNote.id === id
                  ? {
                      id: prevNote.id,
                      content:
                        'your notifications are turned off manually please turn them on to use the app',
                    }
                  : prevNote
              );
            });
          }

          if (permission === 'granted') {
            const nextNotification = notifications.filter(
              (not) => not.id !== id
            );

            setNotification(nextNotification);
          }
        },
      },
    };
  };

  useEffect(() => {
    const notifications = [];

    if (!('Notification' in window)) {
      const notSupported = addNotSupportedBrowserAlert();

      notifications.push(notSupported);
    } else {
      if (Notification.permission !== 'granted') {
        const notGranted = addDisabledNotificationAlert();

        notifications.push(notGranted);
      }

      if (!('showTrigger' in Notification.prototype)) {
        const noShowTrigger = {
          id: crypto.randomUUID(),
          content: (
            <div>
              it&apos;s not possible to trigger notifications in your browser.
              you need to enable them manually check out{' '}
              <a
                target="_blank"
                href="https://developer.chrome.com/en/docs/web-platform/notification-triggers/#use"
              >
                this link
              </a>{' '}
              to see how to enable it
            </div>
          ),
        };

        notifications.push(noShowTrigger);
      }
    }

    setNotification(notifications);
  }, []);

  return (
    <>
      {notifications.map((notification, idx) => {
        return <Alert key={idx} {...notification} />;
      })}
    </>
  );
}
