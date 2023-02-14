import { ReactNode } from 'react';

interface IProject {
  title: string
  children: ReactNode
}
export default function Project({ title, children } : IProject) {
  return (
    <div className="flex flex-col items-center mb-10">
      <h4>{title}</h4>
      {children}
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Earum impedit nemo provident recusandae repudiandae sapiente.
      </p>
    </div>
  );
}
