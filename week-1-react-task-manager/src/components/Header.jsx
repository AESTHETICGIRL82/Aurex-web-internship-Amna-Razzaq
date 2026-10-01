function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-mark">✓</div>

        <div className="brand-copy">
          <p className="eyebrow">AUREX · Month 2</p>
          <h1>TaskFlow</h1>
        </div>
      </div>

      <p className="header-note">React Task Manager</p>
    </header>
  );
}

export default Header;