export default function RecentDonations({ donations }) {
  console.log("Received donations:", donations); // Check if donations prop is received

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <span>{donation.name} donated ${donation.amount}</span>
            {donation.caption}
          </li>
        ))}
      </ul>
    </section>
  );
}