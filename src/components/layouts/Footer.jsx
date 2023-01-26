import React from 'react'

const Footer = () => {
  const footerYear = new Date().getFullYear()
return (
<footer className='footer p-5 bg-gray-700 text-primary-content footer-center' >
  <div>
      <p className='text-base font-semibold' >Copyright @ {footerYear} All rights reserve</p>
  </div>
</footer>
)
}

export default Footer