import { BalanceChart, EngagementChart } from "./charts";

export function TopCards() {
  return (
    <section className="grid-top">
      <article className="card-base card-small">
        <div className="card-head">
          <div>
            <h3>Payment Goal</h3>
            <p>Total amount goal</p>
          </div>
          <button className="mini-btn">NE</button>
        </div>

        <div className="credit-card">
          <p className="cc-brand">VISA</p>
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
          <span>+12.8%</span>
        </div>
      </article>

      <article className="card-base card-chart">
        <div className="card-head">
          <div>
            <h3>Engagement Rate</h3>
          </div>
          <div className="chip-row">
            <button>Monthly</button>
            <button className="active">Annually</button>
            <button className="mini-btn">NE</button>
          </div>
        </div>

        <div className="chart-wrap tall">
          <EngagementChart />
        </div>
      </article>

      <article className="card-base card-summary">
        <div className="card-head">
          <div>
            <h3>Payment Goal</h3>
            <p>Total amount goal</p>
          </div>
          <button className="mini-btn">NE</button>
        </div>

        <div className="summary-value">$32,678.90</div>
        <div className="chart-wrap small">
          <BalanceChart />
        </div>

        <div className="cta-row">
          <button className="send">Send</button>
          <button>Receive</button>
        </div>
      </article>
    </section>
  );
}
