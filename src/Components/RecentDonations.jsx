export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li><span>{props.data[0].name} donated ${props.data[0].amount}</span>{props.data[0].caption}</li>
        <li><span>{props.data[1].name} donated ${props.data[1].amount}</span>{props.data[1].caption}</li>
        <li><span>{props.data[2].name} donated ${props.data[2].amount}</span>{props.data[2].caption}</li>
        <li><span>{props.data[3].name} donated ${props.data[3].amount}</span>{props.data[3].caption}</li>
        <li><span>{props.data[4].name} donated ${props.data[4].amount}</span>{props.data[4].caption}</li>
      </ul>
    </section>
  );
}
