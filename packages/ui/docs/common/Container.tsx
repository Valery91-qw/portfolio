import {
  ElementType, HTMLAttributes,
} from 'react';

interface IContainer extends HTMLAttributes<HTMLOrSVGElement> {
  component: ElementType
}

export default function Container({ component: Tag, ...rest }: IContainer) {
  const styles = `container py-10 mx-auto px-5 ${rest.className}`;
  const props = { className: styles, ...rest };
  return <Tag {...props} />;
}
