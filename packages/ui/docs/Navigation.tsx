import Container from './common/Container';

interface INavigation {
  elements: Array<string>
}

export default function Navigation({ elements } : INavigation) {
  return (
    <header className="sticky top-0 z-30 w-full bg-zinc-900 font-mono">
      <Container tag="nav" classes="py-5 flex justify-end gap-x-10">
        {elements
          .map((el) => (
            <span key={el}>
              <a href="#value">{el}</a>
            </span>
          ))}
      </Container>
    </header>
  );
}
