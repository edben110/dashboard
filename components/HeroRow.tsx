import { CalendarDays, ChevronDown, Plus } from "lucide-react";

export function HeroRow() {
  return (
    <section className="hero-row">
      <h1>
        Welcome Back, <span>Sujon</span>
      </h1>
      <div className="hero-actions">
        <button className="date-pill" aria-label="Select date range">
          <CalendarDays size={14} strokeWidth={2.1} />
          <span>29 Jun, 2025 - 29 August, 2025</span>
          <ChevronDown size={14} strokeWidth={2.1} />
        </button>
        <button className="wallet-btn" aria-label="Add new wallet">
          <Plus size={14} strokeWidth={2.1} />
          <span>Add New Wallet</span>
        </button>
      </div>
    </section>
  );
}
