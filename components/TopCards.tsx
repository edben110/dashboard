import { BalanceChart, EngagementChart } from "./charts";
import {
  ArrowDown,
  ArrowUp,
  ExternalLink,
  SquareChartGantt,
  Wifi,
} from "lucide-react";
import { FaCcVisa } from "react-icons/fa";

export function TopCards() {
  return (
    <section className="grid-top">
      <article className="card-base card-small">
        <div className="card-head">
          <div className="card-title">
            <div>
              <h3>Payment Goal</h3>
              <p>Total amount goal</p>
            </div>
          </div>
          <button className="mini-btn" aria-label="Open details">
            <ExternalLink size={14} strokeWidth={2.2} />
          </button>
        </div>

        <div className="credit-card">
          <div className="cc-top-row">
            <div className="cc-brand-mark" aria-label="Visa brand">
              <FaCcVisa />
            </div>
            <span className="cc-contactless" aria-label="Contactless payment">
              <Wifi size={16} strokeWidth={2.2} />
            </span>
          </div>
          <p className="cc-type">Credit Card</p>
          <p className="cc-balance">$ 78,989.09</p>
          <div className="cc-foot">
            <span>**** 909090</span>
            <span>EXP 09/26</span>
          </div>
        </div>

        <div className="mini-revenue">
          <div>
            <p>Weekly Revenue</p>
            <strong>+3,945 USD</strong>
          </div>
          <span className="percentage-badge">+12.8%</span>
        </div>
      </article>

      <article className="card-base card-chart">
        <div className="card-head">
          <div className="card-title with-icon">
            <span className="title-icon">
              <SquareChartGantt size={17} strokeWidth={2.2} />
            </span>
            <div>
              <h3>Engagement Rate</h3>
            </div>
          </div>
          <div className="chip-row">
            <button>Monthly</button>
            <button className="active">Annually</button>
            <button className="mini-btn" aria-label="Open details">
              <ExternalLink size={14} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="chart-wrap tall">
          <EngagementChart />
        </div>
      </article>

      <article className="card-base card-summary">
        <div className="card-head">
          <div className="card-title">
            <div>
              <h3>Payment Goal</h3>
              <p>Total amount goal</p>
            </div>
          </div>
          <button className="mini-btn" aria-label="Open details">
            <ExternalLink size={14} strokeWidth={2.2} />
          </button>
        </div>

        <div className="summary-value">$32,678.90</div>
        <div className="chart-wrap small">
          <BalanceChart />
        </div>

        <div className="cta-row">
          <button className="send">
            Send <ArrowUp size={14} strokeWidth={2.5} />
          </button>
          <button>
            Receive <ArrowDown size={14} strokeWidth={2.5} />
          </button>
        </div>
      </article>
    </section>
  );
}
