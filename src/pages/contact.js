import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"

const ContactPage = () =>
        <div style = {{ color: `red` }}>
            <Link to="/">Back Home</Link>
            <Header headerText="Contact ME"/>
        </div>

export default ContactPage
