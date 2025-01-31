import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Regiok from './Regiok'


function App() {
 return (
  <div>
<BrowserRouter>
<Routes>
  <Route>path="/" element={<Home/>}</Route>
  <Route>path="/Regiok" element={<Home/>}</Route>
</Routes>
</BrowserRouter>

  </div>
 )
}

export default App
