import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  const [colorOfBulb, setColorOfBulb] = useState("white")


return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>CLICK ON/OFF</h2>
      <div className="lightbulb">
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      </div>
    </>
  )
}

export default App
// Not sure how to get borders around on/off.