import { getTitle } from '@/helpers/notion.helper';
import { fetcher } from '@/safe-req/client';
import { NotionPagesRequest } from '@/services/notion';

type PageProps<Params> = {
  params: Params;
};

type TaskProps = PageProps<{
  id: string;
}>;

export default async function Task(props: TaskProps) {
  const { id } = props.params;

  const response = await fetcher('getNotionPageById', {
    body: JSON.stringify({
      id,
    }),
  });

  if (!response.ok) {
    throw new Error('SHIT HAPPENS');
  }

  const notionPage = (await response.json()) as NotionPagesRequest;

  const title = getTitle(notionPage.properties['Name']);

  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <a
            target="_blank"
            href={notionPage.url}
            rel="noreferrer"
            title="jump back to notion"
          >
            {/* todo replace with notion icon and title */}
            jump back to notion
          </a>
        </div>
        {/* <NotificationButton /> */}
      </div>
      <pre>{JSON.stringify(notionPage, null, 4)}</pre>
    </div>
  );
}
