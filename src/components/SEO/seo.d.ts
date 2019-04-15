import * as React from 'react';

type MetaProps = JSX.IntrinsicElements['meta'];

export default interface SEOProps {
  description: string;
  lang: string;
  meta: HTMLMetaElement;
  keywords: [];
  title: string;
}
