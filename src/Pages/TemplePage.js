import React from 'react'

const TemplePage = () => {
    const link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27931.645404951287!2d77.20749948022042!3d28.944206081709147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c52e0d37a2771%3A0xb323399f88ef042!2sBaghpat%2C%20Uttar%20Pradesh%20250609!5e0!3m2!1sen!2sin!4v1704206890755!5m2!1sen!2sin"
  return (
    <div className=' flex w-full items-center justify-center h-screen'>
        <iframe src={`${link}`} width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  )
}

export default TemplePage