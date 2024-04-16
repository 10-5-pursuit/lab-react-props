export default function Progress({donations, totalAmount}) {
let value = 0
for(let donation of donations){
  value += donation.amount
}

  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">{value}</span> of
    <span className="secondary">{totalAmount}</span>
  </h2>
</section>
  )
}