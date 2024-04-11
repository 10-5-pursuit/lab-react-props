

function Progress(props) {
  const { amount } = props;
  let total = 0;
  amount.forEach(num => total += num);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  )
}


export default Progress;