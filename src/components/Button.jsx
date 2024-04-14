import React from 'react'

const Button = ({styels}) => {
  return (
     <button className={`py-4 px-6 font-poppins font-medium text-[18px]  text-primary bg-blue-gradient rounded-[10px] outline-none ${styels}`}>
         Get Started
      </button>
  )
}

export default Button
