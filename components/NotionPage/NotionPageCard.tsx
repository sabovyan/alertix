import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Link from 'next/link';
import {
  backgroundColors,
  getStatus,
  getTitle,
  notionColors,
} from '../../helpers/notion.helper';
import { NotificationModal } from '../NotificationModal/NotificationModal';

type Props = {
  page: PageObjectResponse;
};

export function NotionPageCard({ page }: Props) {
  const title = getTitle(page.properties['Name']);

  const status = getStatus(page.properties['Status']);

  const color: NonNullable<typeof status>['color'] =
    status?.color ||
    (notionColors.default as NonNullable<typeof status>['color']);

  const borderColor = notionColors[color];

  const bgColor = backgroundColors[color];

  return (
    <div
      className={`w-80 ${bgColor} border p-4 rounded-md ${borderColor} shadow-sm dark:shadow-sm flex flex-col gap-4`}
    >
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <Link href={`task/${page.id}`}>
          <h3>{title}</h3>
        </Link>

        <NotificationModal pageId={page.id} />
      </div>

      {status ? (
        <div>
          <strong>status: </strong> {status.name}
        </div>
      ) : (
        <div>
          <span>
            please add status and name it <strong>Status</strong>
          </span>
        </div>
      )}
      <a
        target="_blank"
        href={page.url}
        rel="noreferrer"
        title="open in Notion"
      >
        {title} in Notion &#10138;
      </a>
    </div>
  );
}
