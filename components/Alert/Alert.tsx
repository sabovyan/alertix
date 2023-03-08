import { notionColors } from '@/helpers/notion.helper';

export function Alert({ content }: any) {
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
      <span>x</span>
    </div>
  );
}
