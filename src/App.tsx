import React from 'react';

function App() {
  // simple router using the history API so that we can show a placeholder
  // page when the user navigates to `/technology` or `/education`.
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
        return (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Education Background</h2>
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Hefei University of Technology (HFUT)</h3>
                <p className="text-slate-600 mt-1">Graduate</p>
                <p className="text-sm text-slate-500 mt-2">Summer's education background.</p>
              </div>
            </div>
          </div>
        );
      case '/about':
        return <h1 className="text-2xl font-bold animate-in fade-in duration-500">About (placeholder)</h1>;
      default:
        return (
          <div className="text-lg text-slate-800 animate-in fade-in duration-500">
            Engineering Summer Fng
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-10">
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className={`transition-colors ${path === '/' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
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
                className={`transition-colors ${path === '/education' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
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
                className={`transition-colors ${path === '/technology' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
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
                className={`transition-colors ${path === '/about' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        {renderMain()}
      </main>
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

