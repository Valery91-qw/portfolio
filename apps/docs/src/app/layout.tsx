import './globals.css';
import Navigation from 'ui/docs/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <Navigation elements={['one', 'two', 'three', 'four']} />
        {children}
      </body>
    </html>
  );
}
