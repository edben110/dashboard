export function TopBar() {
  return (
    <header className="topbar card-base">
      <div className="brand">
        <span className="brand-icon">Q</span>
        <span className="brand-name">Quixotic</span>
      </div>

      <nav className="top-nav">
        <button className="active">Dashboard</button>
        <button>Reports</button>
        <button>Documents</button>
        <button>History</button>
        <button>Contacts</button>
      </nav>

      <div className="top-actions">
        <button className="icon-btn">S</button>
        <button className="icon-btn">N</button>
        <button className="avatar">SJ</button>
      </div>
    </header>
  );
}
