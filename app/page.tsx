import { NotionPageCard } from '@/components/NotionPage/NotionPageCard';
import { getPagesByDataBaseId } from '@/services/notion';

export default async function Home() {
  const pages = await getPagesByDataBaseId();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {pages.results.map((page) => {
        return <NotionPageCard key={page.id} page={page} />;
      })}
    </div>
  );
}
