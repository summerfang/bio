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
        return <HomePage navigate={navigate} />;
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

function HomePage({ navigate }: { navigate: (to: string) => void }) {
  const cards = [
    {
      to: '/education',
      label: 'Education',
      description: 'Academic background at Hefei University of Technology.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      to: '/technology',
      label: 'Technology',
      description: 'AI, machine learning and the technologies I work with.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      to: '/about',
      label: 'About',
      description: 'More about me, my interests and how to get in touch.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Summer Fng</h1>
        <p className="text-lg text-indigo-600 font-medium mb-4">Software Engineer</p>
        <p className="max-w-xl mx-auto text-slate-600 leading-relaxed">
          Graduate of Hefei University of Technology with a passion for AI and modern
          web development. Building things that are useful and well-crafted.
        </p>
      </section>

      {/* Quick-link cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-16">
        {cards.map(({ to, label, description, icon }) => (
          <button
            key={to}
            type="button"
            onClick={() => navigate(to)}
            className="text-left p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-100 transition-colors">
              {icon}
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">{label}</h3>
            <p className="text-sm text-slate-500">{description}</p>
          </button>
        ))}
      </section>
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

