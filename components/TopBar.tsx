import { Bell, ChevronDown, Search } from "lucide-react";

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
        <button className="icon-btn" aria-label="Search">
          <Search size={18} strokeWidth={2.2} />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={2.2} />
        </button>
        <button className="avatar" aria-label="Profile">
          SJ
        </button>
        <button className="icon-btn" aria-label="Open profile menu">
          <ChevronDown size={16} strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}
