interface INavigation {
  elements: Array<string>
}
export default function Navigation({ elements } : INavigation) {
  return (
    <header className="sticky top-0 z-30 w-full bg-zinc-900">
      <nav className="container mx-auto px-10 py-5 flex justify-end gap-x-10">
        {elements
          .map((el) => (
            <span key={el} className="text-hover-animate p-1 text-color font-normal">
              <a className="text-lg" href="#">{el}</a>
            </span>
          ))}
      </nav>
    </header>
  );
}
