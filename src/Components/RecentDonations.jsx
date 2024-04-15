export default function RecentDonations({ donations }) {
  
   donations = donations.map((donation) => {
      const { amount, caption, name } = donation;
    
      return(
        <li key={donation.name}><span>{name} donated ${amount}</span>{caption}</li>
      )
    });

    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>{donations}</ul>
      </section>
    )
}

  
   
 
