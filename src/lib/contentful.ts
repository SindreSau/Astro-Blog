import contentful, { type EntryFieldType, type EntryFieldTypes } from 'contentful';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export interface BlogPost {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    createdAt: EntryFieldTypes.Date;
    coverImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.Object;
    abstract: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export interface Author {
  contentTypeId: 'author';
  fields: {
    name: EntryFieldTypes.Text;
    profileImage: EntryFieldTypes.AssetLink;
    oneliner: EntryFieldTypes.Text;
    bio: EntryFieldTypes.RichText;
  };
}
