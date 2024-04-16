export default function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${props.moneyRaised}</span> of
        <span className="secondary"> ${props.totalAmount}</span>
      </h2>
    </section>
  )
}


