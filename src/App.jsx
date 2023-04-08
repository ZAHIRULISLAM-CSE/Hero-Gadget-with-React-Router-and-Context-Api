import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="md:min-h-[calc(100vh-25vh)]">
          <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
  </div>
  )
  
}

export default App
