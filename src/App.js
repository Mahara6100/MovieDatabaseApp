import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import Searched from './components/Searched'
import SingleMovie from './components/SingleMovie'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/search" component={Searched} />
        <Route path="/movie/:id" component={SingleMovie} />
      </Switch>
    </div>
  )
}

export default App
