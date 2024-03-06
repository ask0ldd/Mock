import '../style/MainNavBar.css'
import redfoldermenuicon from '../assets/icons/redfoldermenuicon.png'
import blackarchivefoldericon from '../assets/icons/blackarchivefoldericon.png'

function MainNavBar(){
    return(
    <nav>
        <ul>
            <li className='menuSectionContainer'>
                <span className='title jost-500'>MENU TITLE 1</span>
                <ul className='menuItemsContainer'>
                    <li className='menuItem active' style={{marginTop:'12px'}}>
                        <div className='decorator active'></div><img src={redfoldermenuicon}/><div>Menu Element 1</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 2</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 3</div>
                    </li>
                </ul>
            </li>
            <div className='menuSeparators'></div>
            <li className='menuSectionContainer topMg'>
                <span className='title jost-500'>MENU TITLE 2</span>
                <ul className='menuItemsContainer'>
                    <li className='menuItem' style={{marginTop:'12px'}}>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 1</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 2</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 3</div>
                    </li>
                </ul>
            </li>
            <div className='menuSeparators'></div>
            <li className='menuSectionContainer topMg'>
                <span className='title jost-500'>MENU TITLE 2</span>
                <ul className='menuItemsContainer'>
                    <li className='menuItem' style={{marginTop:'12px'}}>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 1</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 1</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div><img src={blackarchivefoldericon}/><div>Menu Element 1</div>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    )
}

export default MainNavBar