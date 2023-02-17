import { ReactNode } from 'react';
import Container from '../common/Container';
import SkillComponent from './Skill/SkillComponent';

interface ISkillsSection {
  imgElement: ReactNode
}

const skills = ['react', 'redux', 'typescript', 'javaScript'];

export default function SkillsSection({ imgElement }: ISkillsSection) {
  return (
    <div className="bg-zinc-900 text-zinc-50">
      <Container tag="div" classes="px-5 flex flex-wrap gap-x-10 gap-y-5 justify-center">
        {
            skills.map(
              (el) => <SkillComponent title={el} key={el}>{imgElement}</SkillComponent>,
            )
        }
      </Container>
    </div>
  );
}
