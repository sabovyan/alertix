import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type PropertyValue = PageObjectResponse['properties']['string'];

type StatusValue = Extract<PropertyValue, { type: 'status' }>;

const isStatus = (prop?: PropertyValue): prop is StatusValue =>
  prop?.type === 'status';

export const getStatus = (property?: PropertyValue) => {
  const prop = isStatus(property) ? property : null;

  return prop?.status || null;
};

type TitleValue = Extract<PropertyValue, { type: 'title' }>;

const isTitle = (prop: PropertyValue): prop is TitleValue =>
  prop.id === 'title' && prop.type === 'title';

export const getTitle = (prop: PropertyValue) => {
  const title = isTitle(prop) ? prop : null;

  return title && title.title[0].type === 'text'
    ? title.title[0].text.content
    : null;
};

export const notionColors = {
  default: 'var(--default)',
  gray: 'var(--gray)',
  brown: 'var(--brown)',
  orange: 'var(--orange)',
  yellow: 'var(--yellow)',
  green: 'var(--green)',
  blue: 'var(--blue)',
  purple: 'var(--purple)',
  pink: 'var(--pink)',
  red: 'var(--red)',
};
