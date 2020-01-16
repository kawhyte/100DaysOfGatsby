import React from "react"
import Header from "./components/header"


export default () => (
  <div style={{ color: `teal` }}>
      <Header headerText = "About Gastsby" arbitraryPhrase="is arbitrary"/>
      <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)