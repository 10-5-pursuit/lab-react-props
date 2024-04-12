export default function DonationForm() {
  return (
    <form className="donation">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Your name..."/>

      <label htmlFor="">Caption</label>
      <input type="text" placeholder="Add a brief Message..."/>

      <label htmlFor="">Amount</label>
      <input type="number" placeholder="0"/>

      <button>Donate!</button>

    </form>
  )
}
