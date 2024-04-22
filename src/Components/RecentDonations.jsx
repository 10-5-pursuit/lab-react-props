import React from 'react'
import './recentdonations.css'

const RecentDonations = ({donations}) => {
  return (
    <section>
    <h2>RecentDonations</h2>

    <ul>
{donations.map((donation) => (
  <li key={donation.id}>
    <span>{ `${donation.name} donated $${donation.amount}`}</span><p>
{donation.caption}</p>
</li> 
)
)}
    </ul>
      </section>
      
  )
}

export default RecentDonations
