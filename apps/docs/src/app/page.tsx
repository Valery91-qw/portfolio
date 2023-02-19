import Image from 'next/image';
import HeroSection from 'ui/docs/HeroSection';
import SkillsSection from 'ui/docs/Skills/SkillsSection';
import ProjectsSection from 'ui/docs/Projects/ProjectsSection';
import Form from 'ui/docs/Form/Form';
import Footer from "ui/docs/Footer";

const imagePlaceHolder = 'https://via.placeholder.com/600.png';

export default function Home() {
  return (
    <main>
      <HeroSection>
        <Image src={imagePlaceHolder} alt="alt" width="300" height="300" className="mr-0" />
      </HeroSection>
      <SkillsSection
        imgElement={<Image src={imagePlaceHolder} alt="alt" width="50" height="50" className="mr-5" />}
      />
      <ProjectsSection img={(
        <Image
          src={imagePlaceHolder}
          alt="alt"
          width="150"
          height="150"
          className="rounded-full my-3"
        />
 )}
      />
      <Form />
      <Footer />
    </main>
  );
}
