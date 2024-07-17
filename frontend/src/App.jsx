import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ViewPage from './pages/ViewPage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import DeletePage from './pages/Deletepage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/view/:id' element={<ViewPage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/edit/:id' element={<EditPage/>}/>
          <Route path='/delete/:id' element={<DeletePage/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App
