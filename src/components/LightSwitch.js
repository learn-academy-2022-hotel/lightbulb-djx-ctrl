import React, {useState} from "react"

const LightSwitch = () => {
  
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
  const [colorOfBulb, setColorOfBulb] = useState("white")

  const clicksLight = () => {
    if(lightSwitchStatus === "off"){
      setColorOfBulb("yellow")
      setLightSwitchStatus("on")
    } else {
        setColorOfBulb("white")
        setLightSwitchStatus("off")
    }
}
  
  return (
    <>
      <div className="lightbulb"></div>
    <div classname="lightbulb" onClick={clicksLight} style={{backgroundColor:colorOfBulb}}>{lightSwitchStatus}</div>
    
    </>
  )
}

export default LightSwitch
