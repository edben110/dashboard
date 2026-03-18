import {
  ChartNoAxesCombined,
  Compass,
  CreditCard,
  LayoutGrid,
  LogOut,
  Mail,
  Settings,
  Wallet,
  WalletCards,
} from "lucide-react";

export function SideRail() {
  return (
    <aside className="left-rail">
      <div className="rail-cluster">
        <div className="rail-group">
          <button className="rail-btn active" aria-label="Dashboard">
            <LayoutGrid size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Analytics">
            <ChartNoAxesCombined size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Wallet">
            <Wallet size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Cards">
            <CreditCard size={19} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="rail-cluster">
        <div className="rail-group">
          <button className="rail-btn" aria-label="Payments">
            <WalletCards size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Messages">
            <Mail size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Discover">
            <Compass size={19} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="rail-spacer" />

      <div className="rail-cluster">
        <div className="rail-group">
          <button className="rail-btn" aria-label="Settings">
            <Settings size={19} strokeWidth={2.2} />
          </button>
          <button className="rail-btn" aria-label="Log out">
            <LogOut size={19} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </aside>
  );
}
