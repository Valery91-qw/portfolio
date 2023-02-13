import Image from 'next/image';
import HeroSection from 'ui/docs/HeroSection';

const imagePlaceHolder = 'https://via.placeholder.com/600.png';
export default function Home() {
  return (
    <main>
      <HeroSection>
        <Image src={imagePlaceHolder} alt="alt" width="300" height="300" className="mr-0" />
      </HeroSection>
    </main>
  );
}
