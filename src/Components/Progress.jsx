import React from 'react'
import './progress.css'


const Progress = ({donations}) => {

  let totalDonations = 0;
  donations.forEach((donation) => {
   totalDonations += donation.amount
  })

  return (
  
    <div className='section-2'>  <h2> Raised $
     <span>{`${totalDonations}`} </span> of <span className="goal">$1000</span></h2>
     </div>
  )
  
}


export default Progress

