// import React from 'react'

function Button({type = 'button', text='', icon = null, bgColor = '#eee'}) {
  return (
   <button className='button' type={type}
   style = {
    {
        backgroundColor: bgColor
    }
}
   >
    {text}{icon && icon}
    </button>
  )
}

export default Button
