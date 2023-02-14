import {
  createElement, CSSProperties, ReactHTML, ReactNode,
} from 'react';

interface IContainer {
  tag: keyof ReactHTML
  children: ReactNode
  classes?: string
  style?: CSSProperties
}
export default function Container({
  tag, children, classes, ...rest
}: IContainer) {
  const classNames = `container py-10 mx-auto px-5 ${classes}`;
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
