import React from 'react';
import Container from './common/Container';

interface IHeroSection {
  children: React.ReactNode
}

export default function HeroSection({ children }: IHeroSection) {
  return (
    <div className="bg-zinc-50 h-screen flex items-center">
      <Container tag="div" classes="px-5 flex justify-between">
        <section className="text-color-secondary mr-10">
          <h2 className="text-4xl mb-10 text-center">HI there</h2>
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Animi aspernatur, est eum ipsam quis sequi.das
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </section>
        {children}
      </Container>
    </div>
  );
}
