'use client';

import React, { useEffect } from 'react';
import Container from './common/Container';

interface INavigation extends React.ComponentPropsWithoutRef<'header'> {
  elements: Array<string>
}

export default function Navigation({ elements } : INavigation) {
  useEffect(() => {
    const header = document.querySelector('header');
    const containers = document.querySelectorAll('section');

    const lightBG = 'bg-zinc-50';
    const darkBG = 'bg-zinc-900';

    const changeBg = () => {
      let current = false;
      const height = window.scrollY;

      containers.forEach((container) => {
        const top = container!.offsetTop;

        if (height >= (top - header.clientHeight)) {
          current = container.classList.contains(darkBG);
        }
      });

      if (current) {
        header.classList.remove(darkBG);
        header.classList.add(lightBG);
      } else {
        header.classList.remove(lightBG);
        header.classList.add(darkBG);
      }
    };

    window.addEventListener('scroll', changeBg);

    return () => {
      window.removeEventListener('scroll', changeBg);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-zinc-900 font-mono transition-colors">
      <Container component="nav" className="flex justify-end gap-10 py-5 px-10">
        {elements
          .map((el) => (
            <span key={el}>
              <a className="animate-link-dark" href="#value">{el}</a>
            </span>
          ))}
      </Container>
    </header>
  );
}
