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

export const notionColors: { [key: string]: string } = {
  default: '#91918e',
  gray: '#e3e2e0',
  brown: '#edc1ae',
  orange: '#fadec9',
  yellow: '#fdecc8',
  green: '#dbeddb',
  blue: '#5b97bd',
  purple: '#e8deee',
  pink: '#f5e0e9',
  red: '#ffe2dd',
};
