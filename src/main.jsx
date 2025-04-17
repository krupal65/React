import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Parcatice } from './parcatice.jsx'
import { Cart } from './Cart.jsx'
import { State } from './State.jsx'

import { Pracfinal } from './Pracfinal.jsx'
import { LiftingState } from './LiftingState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pracfinal/>
    <LiftingState/>

{/* <State/>
   <Parcatice/> */}

  </StrictMode>
)                                                                                                                                                                                                                                                                                                                                   