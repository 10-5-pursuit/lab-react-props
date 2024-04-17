import React from "react";
// import donations from "./App";

export default function RecentDonations(prop) {
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
      amount: 30,
      caption: "Come visit me in Miami!",
      id: 5,
      name: "Sam",
    },
    {
      amount: 5,
      caption: "Have fun!",
      id: 4,
      name: "Malinda",
    },

  ];

  const donater = donations.map((donate) =>{
    return <li key={donate.id}><span>{donate.name} donated ${donate.amount}</span>{donate.caption}</li>
  }
)

  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {donater}
        </ul>
      </section>
    </>
  );
}
