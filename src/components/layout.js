/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

function change_background(){
  const current_second = Math.round(new Date().getTime() / 1000).toString().slice(-1);;
  console.log("Current Second: " + current_second);
  document.body.classList.add("hero");
  document.body.classList.add("hero--" + current_second);
}

const Layout = ({ children }) => {
  change_background();


  return (
    <>
        <main className="center">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
