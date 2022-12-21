import Header from './header'
import Products from './products'
import SearchBar from './searchBar'

export default function Root({isAuth}) {

  return (
    <div className="Root">
      <Header isAuth={isAuth}/>
      <SearchBar />
      <Products />
    </div>
  )
}

