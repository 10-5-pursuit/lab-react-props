export default function RecentDonations({donators}) {

 const donationDescription = donators.map(donator => {
  let {name, caption, amount} = donator


  return <li><span>{name} donated {amount}</span>{caption}</li>
})

  return (
  <section>
    <h2>Recent Donations</h2>
    <ul>
      {donationDescription}
    </ul>
  </section>
  )
}
