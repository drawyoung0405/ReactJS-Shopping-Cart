// import React, { Component } from 'react'
function Typoraphy({component, text, className}) {
    const Component = component ? component : 'div'
  return (
    <Component className={className}>
      {text}
    </Component>
  )
}

export default Typoraphy
