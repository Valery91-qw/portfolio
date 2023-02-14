import { ReactNode } from 'react';

interface ISkillComponent {
  title: string
  children: ReactNode
}

export default function SkillComponent({ title, children } : ISkillComponent) {
  return (
    <div className="flex items-center bg-zinc-800 p-5 rounded-lg">
      { children }
      <div>
        <h3 className="pb-5 text-color-primary">{title}</h3>
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cumque dicta facilis id ipsa odit omnis quaerat saepe sed similique veritatis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
