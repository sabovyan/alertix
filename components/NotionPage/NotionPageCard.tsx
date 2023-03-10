import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Link from 'next/link';
import { getStatus, getTitle, notionColors } from '../../helpers/notion.helper';
import { NotificationModal } from '../NotificationModal/NotificationModal';

type Props = {
  page: PageObjectResponse;
};

export function NotionPageCard({ page }: Props) {
  const title = getTitle(page.properties['Name']);

  const status = getStatus(page.properties['Status']);

  if (!page) {
    return null;
  }

  const bgColor = status?.color
    ? notionColors[status?.color]
    : notionColors.default;

  return (
    <div
      style={{
        borderColor: status?.color ? notionColors[status?.color] : 'inherit',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: '1em',
        background: bgColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBlockEnd: '1em',
          width: '100%',
        }}
      >
        <Link href={`task/${page.id}`}>
          <h3 key={title}>{title}</h3>
        </Link>

        <NotificationModal pageId={page.id} />
      </div>

      {status ? (
        <div>{status.name}</div>
      ) : (
        <div>
          <span>
            please add status and name it <strong>Status</strong>
          </span>
        </div>
      )}
      <a target="_blank" href={page.url} rel="noreferrer">
        {title} in Notion
      </a>
    </div>
  );
}
