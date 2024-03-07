import './ActiveFolders.css'
import Header from '../components/Header'
import MainNavBar from '../components/MainNavBar'
import ActiveFolderBar from '../components/Folders/ActiveFolderBar'

function ActiveFolders() {

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
            <ActiveFolderBar ratio={0.7}/>
            <ActiveFolderBar ratio={0.8}/>
            <ActiveFolderBar ratio={0.3}/>
            <ActiveFolderBar ratio={0.6}/>
            <ActiveFolderBar ratio={0.2}/>
            <ActiveFolderBar ratio={0.5}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default ActiveFolders
