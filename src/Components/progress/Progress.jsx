// ./src/Components/progress/Progress.jsx

import "./progress.css";

export default function Progress({ donations, target }) {
  const total = donations.reduce((acc, cur) => acc + cur.amount, 0);

  console.log(total);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary">${target}</span>
      </h2>
    </section>
  );
}
