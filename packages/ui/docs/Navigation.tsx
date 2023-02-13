import Container from './common/Container';

interface INavigation {
  elements: Array<string>
}
export default function Navigation({ elements } : INavigation) {
  return (
    <header className="sticky top-0 z-30 w-full bg-zinc-900">
      <Container tag="nav" columns={1} classes="py-5 flex justify-end gap-x-10">
        {elements
          .map((el) => (
            <span key={el} className="text-hover-animate p-1 text-color-primary font-normal">
              <a className="text-lg" href="#value">{el}</a>
            </span>
          ))}
      </Container>
    </header>
  );
}
