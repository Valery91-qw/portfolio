import { ReactNode } from 'react';
import Container from '../common/Container';
import Project from './Project/Project';

const projects = ['one', 'two', 'three', 'four'];
export default function ProjectsSection({ img }: { img: ReactNode }) {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <Container component="div" className="columns-2 gap-10 py-5">
        {
            projects.map((el) => <Project title={el} key={el}>{img}</Project>)
            }
      </Container>
    </section>
  );
}
