"use client"

import '../../styles/components/_buttons.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export default function ProductHuntButton() {
  const handleClickButton=()=>{
    window.open("https://www.producthunt.com/products/returnqueen?utm_source=badge-top-post-badge&utm_medium=badge#returnqueen", "_blank")
  }

  return (
    <div className="producthuntbutton" onClick={handleClickButton}>
      <div id="icon">
        <FontAwesomeIcon id="icon" icon={faMedal} />
      </div>
      <div className="producthuntbutton__text">
        <div>PRODUCT HUNT</div>
        <div>#3 Product of the Day</div>
      </div>
    </div>
  );
}
