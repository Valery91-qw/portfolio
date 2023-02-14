import { ReactNode } from 'react';
import Container from '../common/Container';
import Project from './Project/Project';

const projects = ['one', 'two', 'three', 'four'];
export default function ProjectsSection({ img }: { img: ReactNode }) {
  return (
    <div className="bg-zinc-50 text-zinc-900">
      <Container tag="div" classes="columns-2 gap-10">
        {
            projects.map((el) => <Project title={el} key={el}>{img}</Project>)
            }
      </Container>
    </div>
  );
}
