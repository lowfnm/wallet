import * as React from "react";

const SvgComponent = (props) => (
    <svg
        width={1}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M.5 0v30" stroke="#BDBDBD" />
    </svg>
);

export default SvgComponent;
