import { MessagesIcon } from '../Icons/Message';

export function Nav() {
  return (
    <nav className="flex justify-between">
      <h2>Alertix</h2>

      <ul>
        <NavMessagesItem />
      </ul>
    </nav>
  );
}

export function NavMessagesItem() {
  return (
    <li className="flex gap-2">
      <MessagesIcon />
      <span>messages</span>
    </li>
  );
}
