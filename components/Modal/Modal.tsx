import React, { LegacyRef } from 'react';

type ModalMainProps = {
  dialogRef: LegacyRef<HTMLDialogElement> | undefined;
  pageId: string;
};

function ModalMain({ dialogRef }: ModalMainProps) {
  function handleClick() {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification('Hi there!');

      // …
    }

    // else if (Notification.permission !== 'denied') {
    //   // We need to ask the user for permission
    //   Notification.requestPermission().then((permission) => {
    //     // If the user accepts, let's create a notification
    //     if (permission === 'granted') {
    //       const notification = new Notification('Hi there!');
    //       // …
    //     }
    //   });
    // }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  // const handleClick = async () => {
  //   const reg = await navigator.serviceWorker.getRegistration();

  //   console.log(`🐞 / handleClick / reg:`, reg);

  //   const permission = await Notification.requestPermission();

  //   if (permission !== 'granted') {
  //     alert('you need to allow push notifications');
  //     return;
  //   }

  //   if (reg) {
  //     const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
  //     reg.showNotification('Demo Push Notification', {
  //       tag: String(timestamp), // a unique ID
  //       timestamp: timestamp,
  //       // @ts-ignore
  //       showTrigger: new TimestampTrigger(timestamp + 10 * 1000),
  //       body: 'Hello World', // content of the push notification
  //       // showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
  //       data: {
  //         url: window.location.href, // pass the current url to the notification
  //       },
  //       actions: [
  //         {
  //           action: 'open',
  //           title: 'Open app',
  //         },
  //         {
  //           action: 'close',
  //           title: 'Close notification',
  //         },
  //       ],
  //       // badge: './assets/badge.png',
  //       // icon: './assets/icon.png',
  //     });
  //   }
  // };

  return (
    <dialog ref={dialogRef}>
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button id="enable" onClick={handleClick}>
          Enable notifications
        </button>

        <button>OK</button>
      </form>
    </dialog>
  );
}

type ModalProps = Omit<ModalMainProps, 'dialogRef'>;

export const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  (props, ref) => {
    return <ModalMain dialogRef={ref} {...props} />;
  }
);

Modal.displayName = 'Modal';
