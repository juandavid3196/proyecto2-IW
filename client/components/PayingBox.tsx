import React from 'react'

interface PayingBoxProps {
  text: string;
  img: string;
  link: string;
}

const PayingBox = ({ text, img, link }: PayingBoxProps) => {
  return (
    <div className="paying-box">
      <div className="paying-icon">
        <img src={img} alt="" />
      </div>
      <div className="paying-info flex flex-col">
        <span>{text}</span>
        <a href="#">{link}</a>
      </div>
    </div>
  )
}

export { PayingBox }