// import React from 'react'

function Button({ type = 'button', text = '', icon = null, bgColor = '#eee', onClick }) {
    return (
        <button className='button' type={type}
            style={
                {
                    backgroundColor: bgColor
                }
            }
            onClick={onClick}
        >
            {text}{icon && icon}
        </button>
    )
}

export default Button
