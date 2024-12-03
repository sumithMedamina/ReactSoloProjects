import TravelJournel from "./components/TravelJournel"
import data from './data'
import Header from './components/header';


function App() {

  const visits = data.map(item =>{
    return(
      <TravelJournel  
    key= {item.title}
    item={item}
    />
    )
  })


  return (
    <div className="travel-journel">
    <Header />
      {visits}
    </div>
  )
}

export default App
