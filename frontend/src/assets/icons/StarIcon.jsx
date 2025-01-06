import * as React from "react";
const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 51 51"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M25.817 0h-.004C25.644 13.938 14.293 25.185.315 25.185c-.105 0-.21 0-.315-.002v.004a20.28 20.28 0 0 1 .315-.002c14.083 0 25.5 11.417 25.5 25.5v.16l-.001.058-.001.097h.004c-.002-.105-.002-.21-.002-.315 0-13.978 11.247-25.33 25.185-25.498v-.004C37.167 25.016 25.984 13.833 25.817 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default StarIcon;
