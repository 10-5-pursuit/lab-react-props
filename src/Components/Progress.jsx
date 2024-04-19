export default function Progress({donations, totalAmt}) {
    
  const total = donations.reduce((acc, donation)=> {

    return acc + donation.amount 
  },0)


  return (
    <section className="progress">
    <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary">${totalAmt}</span>
    </h2>
    </section>
  )
}
