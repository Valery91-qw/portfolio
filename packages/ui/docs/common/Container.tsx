import React, {createElement, ReactHTML} from 'react';

interface IContainer {
  tag: keyof ReactHTML
  columns: 1 | 2 | 3 | 4

  classes?: string
  children: React.ReactNode
}
export default function Container({ columns, tag , children, classes }: IContainer) {
  const colsClass = `columns-${columns}`;
  // in the React library there is an issue to change this type from 'input' to the 'keyof ReactHTML'
  return createElement(tag as 'input', {
    className: `container py-10 mx-auto ${colsClass} ${classes}`
  }, children);
}
