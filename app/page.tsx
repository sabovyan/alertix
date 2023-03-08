import { NotionPageCard } from '@/components/NotionPage/NotionPageCard';
import { getPagesByDataBaseId } from '@/services/notion';

export default async function Home() {
  const pages = await getPagesByDataBaseId();

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
