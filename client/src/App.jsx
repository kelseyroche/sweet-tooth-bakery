// import { useEffect, useState } from 'react'
// import { client } from './sanityClient'
// import HomePage from './components/HomePage'

// function App() {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     client.fetch(`*[_type == "homePage"][0]`).then((res) => {
//       setData(res)
//     })
//   }, [])

//   return (
//     <div>
//       <h1>Sweet Tooth Bakery 🍰</h1>
//       {data ? (
//         <div>
//           <h2>{data.heading}</h2>
//           <p>{data.description}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default App

import React from "react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;