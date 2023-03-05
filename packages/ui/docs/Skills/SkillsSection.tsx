import { ReactNode } from 'react';
import Container from '../common/Container';
import SkillComponent from './Skill/SkillComponent';

interface ISkillsSection {
  imgElement: ReactNode
}

const skills = ['react', 'redux', 'typescript', 'javaScript'];

export default function SkillsSection({ imgElement }: ISkillsSection) {
  return (
    <section className="bg-zinc-900 text-zinc-50">
      <Container component="div" className="flex flex-wrap gap-x-10 gap-y-5 justify-center py-10">
        {
            skills.map(
              (el) => <SkillComponent title={el} key={el}>{imgElement}</SkillComponent>,
            )
        }
      </Container>
    </section>
  );
}
