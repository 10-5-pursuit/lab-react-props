export default function Progress(props) {

  const { amount } = props;
  let sum = 0;
  amount.forEach(num => sum += num)

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  )
}
