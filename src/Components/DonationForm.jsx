export default function DonationForm() {
  const donations = [
    {
      amount: 250,
      caption: "You really need this. Really.",
      id: 1,
      name: "Jo",
    },
    {
      amount: 30,
      caption: "Here, take a break from work!",
      id: 2,
      name: "Rami",
    },
    {
      amount: 20,
      caption: "LOL! You are too funny. Happy to do this for you. :)",
      id: 3,
      name: "Michelle",
    },
    {
      amount: 5,
      caption: "Have fun!",
      id: 4,
      name: "Malinda",
    },
    {
      amount: 30,
      caption: "Come visit me in Miami!",
      id: 5,
      name: "Sam",
    },
  ];

  const num = donations.reduce((acc,currVal) =>{
    if(currVal.id){
      acc++;
    }
    return acc;
  },1);

  return (
    <>
      <section className="donation">
        <h3>
          You could be donation <span class="secondary">#{num}!</span>
        </h3>
        <form>
          <label htmlFor="name"
          >Name<input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..." /></label
          ><label htmlFor="caption"
          >Caption<input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..." /></label
          ><label htmlFor="amount"
          >Amount<input
              id="amount"
              name="amount"
              type="number"
              placeholder="0" /></label
          ><button>Donate!</button>
        </form>
      </section>
    </>
  );
}
