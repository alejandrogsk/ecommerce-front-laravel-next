import React from 'react'

const Shipping = ({svgStyle}) => {
    return (
        <svg
            className={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
        >
              <path d="M5 11v1h8V5H3V4a1 1 0 011-1h10a1 1 0 011 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035V16c0 1.089-.743 2-2 2h-1a3.001 3.001 0 01-6 0h-4a3.001 3.001 0 01-6 0H4a1 1 0 01-1-1v-6H1V9h7v2H5zm3 5.8a1.201 1.201 0 010 2.4 1.201 1.201 0 010-2.4zm10 0a1.201 1.201 0 010 2.4 1.201 1.201 0 010-2.4zM15 14H5v2h.765A2.99 2.99 0 018 15a2.99 2.99 0 012.235 1h5.53A2.99 2.99 0 0118 15a2.99 2.99 0 012.235 1H22v-4.575l-1.711-2.929A1 1 0 0019.426 8H15v6zm1-5v3h5l-1.427-2.496A.999.999 0 0018.705 9H16zM0 6h8v2H0V6z" />
        </svg>
        
    )
}

export default Shipping
