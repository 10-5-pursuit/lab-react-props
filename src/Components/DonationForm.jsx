export default function DonationForm( { count }) {

  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">#{count+ 1}!</span></h3>
      <form>
        <label htmlFor="name">
          Name<input 
          id="name"
          name="name"
          placeholder="Your name..." /></label>
          <label html For="caption">Caption <input 
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
          /></label>
          <label html For="amount">Amount <input
            id="amount"
            name="amount"
            type="number"
            placeholder="0"
          /></label>
          <button>Donate!</button>
      </form>
    </section>
  )
}


