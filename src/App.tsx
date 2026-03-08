import React from 'react';

function App() {
  // simple router using the history API so that we can show a placeholder
  // page when the user navigates to `/technology`.
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState(null, '', to);
    setPath(to);
  };

  const renderMain = () => {
    switch (path) {
      case '/technology':
        return <TechnologyPage />;
      case '/education':
        return <h1 className="text-2xl font-bold">Education (placeholder)</h1>;
      case '/about':
        return <h1 className="text-2xl font-bold">About (placeholder)</h1>;
      default:
        return <h1 className="text-2xl font-bold">Engineering Summer Fng</h1>;
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 text-white shadow-lg">
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="text-slate-200 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/education"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/education');
                }}
                className="text-slate-200 hover:text-white transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="/technology"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/technology');
                }}
                className="text-slate-200 hover:text-white transition-colors"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
                className="text-slate-200 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{renderMain()}</main>
    </div>
  );
}

function TechnologyPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Technology</h1>
      <p className="text-lg">
        This is a placeholder section about AI technology. You could talk about
        machine learning, deep learning, neural networks, etc. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default App;

