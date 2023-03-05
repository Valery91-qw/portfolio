import React from 'react';
import Container from './common/Container';

interface IHeroSection {
  children: React.ReactNode
}

export default function HeroSection({ children }: IHeroSection) {
  return (
    <section className="h-screen flex items-center">
      <Container component="div" className="flex justify-around">
        <article className="mr-10">
          <h2 className="mb-10 text-center">HI there</h2>
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Animi aspernatur, est eum ipsam quis sequi.das
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </article>
        {children}
      </Container>
    </section>
  );
}
