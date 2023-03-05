import { MessagesIcon } from '../Icons/Message';

export function Nav() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>app name</h2>

      <ul style={{ listStyle: 'none' }}>
        <NavMessagesItem />
      </ul>
    </nav>
  );
}

export function NavMessagesItem() {
  return (
    <li style={{ display: 'flex', gap: '0.5em', alignItems: 'cne' }}>
      <MessagesIcon />
      <span>messages</span>
    </li>
  );
}
