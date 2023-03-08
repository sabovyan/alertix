import { NotionPageCard } from '@/components/NotionPage/NotionPageCard';
import { DatabasePagesRequest, getPagesByDataBaseId } from '@/services/notion';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps<{
  pages: DatabasePagesRequest;
}> = async () => {
  const pages = await getPagesByDataBaseId();

  return {
    props: {
      pages,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function Home({ pages }: Props) {
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
