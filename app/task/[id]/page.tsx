import { NotificationButton } from '../../../../01prev example/components/NotificationButton/NotificationButton';
import { getTitle } from '../../../../01prev example/helpers/notion.helper';
import { NotionPagesRequest } from '../../../services/notion';

type PageProps<Params> = {
  params: Params;
};

type TaskProps = PageProps<{
  id: string;
}>;

export default async function Task(props: TaskProps) {
  const { id } = props.params;

  const response = await fetch(`http://localhost:3000/api/notion/pages/${id}`);

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
