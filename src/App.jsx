import Navbar from "./Components/Navbar/Navbar"
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from "./Pages/HomePage/Homepage"
import Products from './Pages/Products/products'
import Footer from "./Components/Footer/Footer"
import Services from "./Pages/Services/Services"
import SignUp from './Pages/SignUp/SignUp'
import ScrollToTop from "./Components/ScrollToTop"

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  
  )
}


export default App;

