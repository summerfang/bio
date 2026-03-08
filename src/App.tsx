function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 text-white shadow-lg">
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <li>
              <a href="/" className="text-slate-200 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/education" className="text-slate-200 hover:text-white transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="/technology" className="text-slate-200 hover:text-white transition-colors">
                Technology
              </a>
            </li>
            <li>
              <a href="/about" className="text-slate-200 hover:text-white transition-colors">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        Engineering Summer Fng
      </main>
    </div>
  )
}

export default App
