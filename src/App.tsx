import RouteView from "./router"
import GlobalCSS from "./global/GlobalCSS"
import React from "react"

function App() {

  return (
    <React.Fragment>
    <GlobalCSS />
      <RouteView></RouteView>
    </React.Fragment>
  )
}

export default App 
