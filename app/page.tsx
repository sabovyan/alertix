import { NotionPageCard } from '@/components/NotionPage/NotionPageCard';
import { getPagesByDataBaseId } from '@/services/notion';

import style from './page.module.css';

export default async function Home() {
  const pages = await getPagesByDataBaseId();

  return (
    <div className={style.pagesWrapper}>
      {pages.results.map((page) => {
        return <NotionPageCard key={page.id} page={page} />;
      })}
    </div>
  );
}
