import './App.css'
import Header from './components/Header'
import MainNavBar from './components/MainNavBar'
import ActiveFolderBar from './components/Folders/ActiveFolderBar'

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainNavBar/>
        <section className='activeFolderBody'>
          <h1>Main / Sub Crumb</h1>
          <div className='buttonsInputsSearchBarContainer'>
            <button className='mainButton'>Button Text</button>
            <div className='separator'/>
            <input className='searchInput'/>
            <input className='select'/>
          </div>
          <div className='activeFoldersContainer'>
            <ActiveFolderBar/>
            <ActiveFolderBar/>
            <ActiveFolderBar/>
            <ActiveFolderBar/>
            <ActiveFolderBar/>
            <ActiveFolderBar/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
