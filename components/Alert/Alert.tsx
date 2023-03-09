import { MouseEventHandler, ReactNode } from 'react';
import { notionColors } from '@/helpers/notion.helper';

export type AlertAction = {
  title: string;
  handler: (id: string) => MouseEventHandler<HTMLButtonElement>;
};

export type AlertProps = {
  content: ReactNode;
  action?: AlertAction;
  id: string;
};

export function Alert({ content, id, action }: AlertProps) {
  return (
    <div
      style={{
        background: notionColors.yellow,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
        marginBlockEnd: '0.5em',
      }}
    >
      <span>{content}</span>

      <div style={{ display: 'flex', gap: '1em' }}>
        {action ? (
          <button onClick={action.handler(id)} style={{ border: '1px solid' }}>
            {action.title}
          </button>
        ) : null}
        <span>x</span>
      </div>
    </div>
  );
}
