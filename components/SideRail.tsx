import {
  BadgeDollarSign,
  ChartColumn,
  CircleHelp,
  CreditCard,
  LogOut,
  Receipt,
  Settings,
  Wallet,
} from "lucide-react";

export function SideRail() {
  return (
    <aside className="left-rail card-base">
      <div className="rail-group">
        <button className="rail-btn active" aria-label="Dashboard">
          <ChartColumn size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Analytics">
          <BadgeDollarSign size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Cards">
          <CreditCard size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Wallet">
          <Wallet size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Invoices">
          <Receipt size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Support">
          <CircleHelp size={16} strokeWidth={2.2} />
        </button>
      </div>

      <div className="rail-spacer" />

      <div className="rail-group">
        <button className="rail-btn" aria-label="Settings">
          <Settings size={16} strokeWidth={2.2} />
        </button>
        <button className="rail-btn" aria-label="Log out">
          <LogOut size={16} strokeWidth={2.2} />
        </button>
      </div>
    </aside>
  );
}
