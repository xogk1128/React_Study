import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import Slot from './Slot'
import { StrictMode } from 'react'
import TogglerCounter from './ToggleCounter'
import ColorBoxGrid from "./ColorBoxGrid";
import ColorBox from "./ColorBox";

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

const data = [
  { id: 1, item : 'egg', quantity : 12, completed : false},
  { id: 2, item : 'milk', quantity : 1, completed : true},
  { id: 3, item : 'chicken breast', quantity : 4, completed : false},
  { id: 4, item : 'carrots', quantity : 6, completed : true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <ColorBox /> */}
      <ColorBoxGrid colors={colors} />
      {/* <TogglerCounter /> */}
      {/* <Counter /> */}
      {/* <Form />
      <Clicker message="HI!!" buttonText="Please Click ME" />
      <Clicker message="Please Stop Click ME" buttonText="Do Not Click" /> */}
      {/* <ShoppingList items={data}/> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <Greeter person="Taeha"/>
      <Chicken/>
      <ColorList colors={["red", "green", "blue"]}/> */}
      {/* <Slot val1="🍒" val2="🍒" val3="🍒" />
      <Slot val1="🍒" val2="🍏" val3="🍒" /> */}
    </div>
  )
}

export default App
