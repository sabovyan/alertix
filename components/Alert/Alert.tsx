import { MouseEventHandler, ReactNode } from 'react';

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
    <div className="flex justify-between p-2 mb-2">
      <span>{content}</span>
      <div className="flex gap-4">
        {action ? (
          <button onClick={action.handler(id)} className="border-2">
            {action.title}
          </button>
        ) : null}
        <span>x</span>
      </div>
    </div>
  );
}
