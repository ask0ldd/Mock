import '../style/Header.css'
import mainAvatar from'../assets/avatars/avatar1.jpg'

function Header(){
    return(
    <header className='shadow'>
        <figure className='manrope-extraBold'>
            Mock Logo
        </figure>
        <div className='mainpanel'>
            <img className='avatar' src={mainAvatar}/>
        </div>
    </header>
    )
}

export default Header