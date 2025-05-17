import "./HeaderTitle.css";
const HeaderTitle = () => {
  return (
    <svg
      width="614"
      height="390"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      <g id="text">
        <text
          x="55"
          y="100"
          font-family="Poppins, sans-serif"
          font-size="65px"
          fill="#FFFFFF"
          font-weight="bold"
          letter-spacing="3"
          text-anchor="start"
        >
          Front-End,
        </text>
        <text
          x="55"
          y="190"
          font-family="Poppins, sans-serif"
          font-size="65px"
          fill="#FFFFFF"
          font-weight="bold"
          letter-spacing="3"
          text-anchor="start"
        >
          Back-End,
        </text>
        <text
          x="55"
          y="270"
          font-family="Poppins, sans-serif"
          font-size="65px"
          fill="#FFFFFF"
          font-weight="bold"
          letter-spacing="3"
          text-anchor="start"
        >
          Engineer...&lt;/&gt;
        </text>
      </g>

      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M587 358C587 349.716 580.284 343 572 343H484.932C476.648 343 469.932 349.716 469.932 358V361C469.932 369.284 476.648 376 484.932 376H572C580.284 376 587 369.284 587 361V358Z"
          fill="#2563EB"
        />
        <text
          x="528.466"
          y="359.5"
          font-family="popins, sans-serif"
          font-size="15"
          font-weight="bold"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          Chathrapathi
        </text>
      </g>
    </svg>
  );
};

export default HeaderTitle;
