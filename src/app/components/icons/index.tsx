import React from "react";

export const ArrowRightIcon = ({ style }: { style?: React.CSSProperties }) => (
    <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414" fill={style?.fill || "#fff"}/></svg>
  );

export const PuzzleIcon = ({ className }: { className?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 8C10.8954 8 10 8.89543 10 10V14C8.89543 14 8 14.8954 8 16V20C8 21.1046 8.89543 22 10 22H12V28C12 29.1046 12.8954 30 14 30H18C19.1046 30 20 29.1046 20 28V26H24C25.1046 26 26 25.1046 26 24V20C26 18.8954 25.1046 18 24 18H20V14C20 12.8954 19.1046 12 18 12H14C12.8954 12 12 12.8954 12 14V10C12 8.89543 12.8954 8 14 8H12Z"
      fill="currentColor"
    />
    <path
      d="M28 18C26.8954 18 26 18.8954 26 20V24C26 25.1046 26.8954 26 28 26H32V28C32 29.1046 32.8954 30 34 30H38C39.1046 30 40 29.1046 40 28V24C40 22.8954 40.8954 22 42 22C43.1046 22 44 21.1046 44 20V16C44 14.8954 43.1046 14 42 14H38V10C38 8.89543 37.1046 8 36 8H32C30.8954 8 30 8.89543 30 10V14H28C26.8954 14 26 14.8954 26 16V18H28Z"
      fill="currentColor"
    />
  </svg>
);