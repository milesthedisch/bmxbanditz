import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"

export default function Home() {
        return (
            <div>
                <Link to="/contact">Contact</Link>
                <Header headerText="Maya is awesome!"/>
            </div>
        )
}
