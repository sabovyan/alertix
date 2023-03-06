import { NotionPageCard } from '@/components/NotionPage/NotionPageCard';
import { DatabasePagesRequest } from '@/services/notion';
import { fetcher } from '@/safe-req/client';

export default async function App() {
  const databasePagesResponse = await fetcher('databasepages');

  if (!databasePagesResponse.ok) {
    // todo not tested
    throw new Error('something is nothing');
  }

  const pages = (await databasePagesResponse.json()) as DatabasePagesRequest;

  return (
    <div
      style={{
        display: 'flex',
        gap: '1em',
      }}
    >
      {pages.results.map((page) => {
        return <NotionPageCard key={page.id} page={page} />;
      })}
    </div>
  );
}
