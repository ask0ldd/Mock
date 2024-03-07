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
              <UserCard avatarFileName="avatar0.png" role="SUPERHERO"/><UserCard avatarFileName="avatar1.png" role="HERO"/><UserCard avatarFileName="avatar2.png" role="SUPERHERO"/>
            </div>
            <div className='rowCardsContainer'>
              <UserCard avatarFileName="avatar3.png" role="HERO"/><UserCard avatarFileName="avatar4.png" role="HERO"/><UserCard avatarFileName="avatar5.png" role="HERO"/>
            </div>
            <div className='rowCardsContainer'>
              <UserCard avatarFileName="avatar6.png" role="HERO"/><UserCard avatarFileName="avatar7.png" role="HERO"/><UserCard avatarFileName="avatar8.png" role="HERO"/>
            </div>  
          </div>
        </section>
      </main>
    </>
  )
}

export default Users
