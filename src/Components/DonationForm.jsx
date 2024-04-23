import React from 'react'
import './donationform.css'

 const DonationForm = () => {
  return (
    <div>You could be donation <span>#6</span>
<form>
<div className='form-input'>
  <label>Name<div></div>
    <input id="name" name="name" type="text" placeholder="Your name..." />
  </label>
  </div>
  <div className='form-input'>
  <label>Caption<div></div>
    <input id="caption" name="caption" type="text" placeholder="Add a brief message..." />
  </label>
  </div>

<div className='form-input'>
  <label>Amount<div></div>
    <input id="amount" name="number" type='number' placeholder="0" />
  </label>
  </div>


      <button>Donate!</button>
      </form>
    </div>
  )
}

export default DonationForm 
