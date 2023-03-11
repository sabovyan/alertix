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
  default: 'border-inherit dark:shadow-gray-300',
  gray: 'dark:shadow-gray-400',
  brown: 'dark:shadow-brown-400',
  orange: 'dark:shadow-orange-400',
  yellow: 'dark:shadow-yellow-400',
  green: 'dark:shadow-green-400',
  blue: 'dark:shadow-blue-400',
  purple: 'dark:shadow-purple-400',
  pink: 'dark:shadow-pink-400',
  red: 'dark:shadow-red-400',
};

export const backgroundColors = {
  default: '',
  gray: 'bg-gray-200 dark:bg-gray-400',
  brown: 'bg-brown-200 dark:bg-brown-400',
  orange: 'bg-orange-200 dark:bg-orange-400',
  yellow: 'bg-yellow-200 dark:bg-yellow-400',
  green: 'bg-green-200 dark:bg-green-400',
  blue: 'bg-blue-200 dark:bg-blue-400',
  purple: 'bg-purple-200 dark:bg-purple-400',
  pink: 'bg-pink-200 dark:bg-pink-400',
  red: 'bg-red-200 dark:bg-red-400',
};

/*

BORDER COLOR COMBINATION
export const notionColors = {
  default: 'border-inherit dark:shadow-gray-300',
  gray: 'border-gray-600 dark:border-gray-500 dark:shadow-gray-400',
  brown: 'border-brown-600 dark:border-brown-500 dark:shadow-brown-400',
  orange: 'border-orange-600 dark:border-orange-500 dark:shadow-orange-400',
  yellow: 'border-yellow-600 dark:border-yellow-500 dark:shadow-yellow-400',
  green: 'border-green-600 dark:border-green-500 dark:shadow-green-400',
  blue: 'border-blue-600 dark:border-blue-500 shadow-gray-500 dark:shadow-blue-400',
  purple: 'border-purple-600 dark:border-purple-500 dark:shadow-purple-400',
  pink: 'border-pink-600 dark:border-pink-500 dark:shadow-pink-400',
  red: 'border-red-600 dark:border-red-500 dark:shadow-red-400',
};


*/
