import './Users.css'
import Header from '../components/Header'
import MainNavBar from '../components/MainNavBar'
import UserCard from '../components/UserCard'

function Users() {

  return (
    <>
      <Header/>
      <main>
        <MainNavBar/>
        <section className='usersBody'>
          <h1>Main / Sub Crumb</h1>
          <div className='buttonsInputsSearchBarContainer'>
            <input className='searchInput'/>
            <input className='select'/>
          </div>
          <div className='usersCardsContainer'>
            <div className='rowCardsContainer'>
              <UserCard/><UserCard/><UserCard/>
            </div>
            <div className='rowCardsContainer'>
              <UserCard/><UserCard/><UserCard/>
            </div>
            <div className='rowCardsContainer'>
              <UserCard/><UserCard/><UserCard/>
            </div>  
          </div>
        </section>
      </main>
    </>
  )
}

export default Users
