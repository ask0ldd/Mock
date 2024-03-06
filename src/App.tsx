import './App.css'
import Header from './components/Header'
import MainNavBar from './components/MainNavBar'
import ActiveFolderBar from './components/ActiveFolderBar'

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainNavBar/>
        <section className='realBody'>
          <h1>Main Crumb / Sub Crumb</h1>
          <div className='activeFoldersContainer'>
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
