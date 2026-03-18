const payments = [
  {
    name: "Dribbble Design",
    date: "16 Jun 2025",
    time: "10:30 PM",
    status: "Successful",
    amount: "89,345.23 USD",
  },
  {
    name: "Google Pay",
    date: "15 Jun 2025",
    time: "11:45 PM",
    status: "Successful",
    amount: "12,345.89 USD",
  },
  {
    name: "Amazon Shopping",
    date: "14 Jun 2025",
    time: "10:15 PM",
    status: "Successful",
    amount: "32,123.67 USD",
  },
] as const;

export function BottomGrid() {
  return (
    <section className="grid-bottom">
      <article className="card-base history-card">
        <div className="card-head">
          <div>
            <h3>Payment History</h3>
            <p>Recent payments history</p>
          </div>
          <button className="mini-btn">NE</button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.name}>
                  <td>{payment.name}</td>
                  <td>{payment.date}</td>
                  <td>{payment.time}</td>
                  <td>
                    <span className="status-dot" />
                    {payment.status}
                  </td>
                  <td>{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <div className="right-stack">
        <article className="card-base amount-card">
          <div className="card-head">
            <div>
              <h3>Amount of credit</h3>
              <p>Total refund amount with fee</p>
            </div>
            <button className="mini-btn">NE</button>
          </div>
          <div className="amount-line">
            <strong>$8,945.89</strong>
            <span>+12.8%</span>
          </div>
        </article>

        <article className="card-base people-card">
          <div className="card-head">
            <div>
              <h3>Mandatory Payments</h3>
              <p>Recent payments</p>
            </div>
            <button className="mini-btn">NE</button>
          </div>

          <div className="people-row">
            <span className="person amber">A</span>
            <span className="person tan">B</span>
            <span className="person gold">C</span>
            <span className="person blue">D</span>
            <span className="person plus">+2</span>
          </div>
        </article>
      </div>
    </section>
  );
}
