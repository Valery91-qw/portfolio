import Container from '../common/Container';
import SkillComponent from './Skill/SkillComponent';

interface ISkillsSection {
  srcToImg: string
}

const skills = ['react', 'redux', 'typescript', 'javaScript'];

export default function SkillsSection({ srcToImg }: ISkillsSection) {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <Container tag="div" columns={2} classes="px-5 flex flex-wrap gap-x-10 gap-y-5 justify-center">
        {
          skills.map((el) => <SkillComponent srcToImg={srcToImg} title={el} key={el} />)
        }
      </Container>
    </div>
  );
}
