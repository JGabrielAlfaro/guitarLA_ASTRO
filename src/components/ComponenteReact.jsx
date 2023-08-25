import { useState } from "react"


const ComponenteReact = () => {
    const [cliente,setCliente] =useState("Gabriel")
  return (
    <div>
      {cliente}
    </div>
  )
}

export default ComponenteReact
