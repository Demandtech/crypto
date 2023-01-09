import React from 'react'
import data from './headerdata'

function Header() {
  return (
    <div>
      <img src={data.logo} alt='logo'/>
    </div>
  )
}

export default Header