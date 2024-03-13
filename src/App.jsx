

import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  
  return (
    <>
      
      <Header></Header>
     <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
     </div>
      
    </>
  )
}

export default App
