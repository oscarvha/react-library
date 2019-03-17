import React from 'react'
import Link from "react-router-dom/es/Link";

const ButtonLink = ({text, type, link, className }) => (

  <Link className={`button-link ${className}` } to={`${link}`}>
    {text}
  </Link>

);

export default ButtonLink;