import { possibleContactTypes } from './possibleContactTypes.js';

const STRING_TYPE_NAME = 'string';

const parseContactType = (contactType) =>
  typeof contactType === STRING_TYPE_NAME &&
  possibleContactTypes.includes(contactType)
    ? contactType
    : undefined;

const parseBoolean = (boolean) =>
  typeof boolean === STRING_TYPE_NAME && ['true', 'false'].includes(boolean)
    ? boolean === 'true'
    : undefined;

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedFavourite = parseBoolean(isFavourite);

  return {
    ...(parsedContactType !== undefined && { contactType: parsedContactType }),
    ...(parsedFavourite !== undefined && { isFavourite: parsedFavourite }),
  };
};
