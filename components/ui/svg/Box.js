import React from 'react'

const Box = ({svgStyle}) => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={svgStyle}
    >
      <path d="M17.677 16.879l-.343.195v-1.717l.343-.195v1.717zm2.823-3.324l-.342.195v1.717l.342-.196v-1.716zM24 5.953V17.46L14.25 23 4 18.011V6.504L13.767 1 24 5.953zM12.154 4.196l7.022 3.2 1.7-.917-7.113-3.193-1.609.91zM13 11.899l-7-3.24v8.19l7 3.148v-8.098zm3.021-2.809L9.203 5.85 7.158 7.018l6.859 3.161 2.004-1.089zM22 8.147l-2 1.078v2.786l-3 1.688v-2.856l-2 1.078v8.362l7-3.985V8.147zm-4.907 7.348l-.349.199v1.713l.349-.195v-1.717zm1.405-.8l-.344.196v1.717l.344-.196v-1.717zm.574-.327l-.343.195v1.717l.343-.195v-1.717zm.584-.332l-.35.199v1.717l.35-.199v-1.717zM3 10H1v1h2v-1zm0 2H0v1h3v-1zm0 2H1v1h2v-1z" />
    </svg>
    )
}

export default Box