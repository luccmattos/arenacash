import { Link, Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <div className="ac-app">
      <header className="ac-header">
        <Link className="ac-header__brand" to="/">
          arenacash
        </Link>
        <div className="ac-header__avatar" aria-hidden="true" />
      </header>

      <main className="ac-main">
        <Outlet />
      </main>

      <footer className="ac-footer">
        <p className="ac-footer__note">
          <span className="ac-footer__product">PRODUCT</span> ARENA · Treinamento ArenaCash · identidade
          obrigatória em materiais ArenaCash
        </p>
      </footer>
    </div>
  );
}
