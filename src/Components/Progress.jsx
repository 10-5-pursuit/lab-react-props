export default function Progress({targetAmount, donations}) {
  const totalDonations = donations.reduce((total, donation) => {
    return total + donation.amount;
  }, 0);
  return (
    <>
      <h2>Raised <span className="secondary">{totalDonations}</span> of <span className="secondary">${targetAmount}</span></h2>
      <h3>You cound be donation <span className="secondary">#{donations.length + 1}!</span></h3>
    </>
  )
}
