export default function Progress( { donations, target }) {

  const sum = donations.reduce((acc, curr) => acc + curr.amount, 0)

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary">${target} </span>
      </h2>
    </section>
  )
}
