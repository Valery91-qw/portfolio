import {
  createElement, CSSProperties, ReactHTML, ReactNode,
} from 'react';

interface IContainer {
  tag: keyof ReactHTML
  columns: 1 | 2 | 3 | 4

  classes?: string
  children: ReactNode
  style?: CSSProperties
}
export default function Container({
  columns, tag, children, classes, ...rest
}: IContainer) {
  const colAmount = `columns-${columns}`;
  const classNames = `container py-10 mx-auto px-5 ${colAmount} ${classes}`;
  const props = { className: classNames, ...rest };
  /*
  In the React library there is an issue:
   to change this type from 'input' to the 'keyof ReactHTML'
   */
  return createElement(tag as 'input', props, children);
}

Container.defaultProps = {
  classes: '',
  style: undefined,
};
