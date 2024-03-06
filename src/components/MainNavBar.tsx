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
                        <div className='decorator active'></div>
                            <img src={redfoldermenuicon}/>
                        <div>Menu Element 1</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3611 2.83912L22.4306 0.700231C22.0556 0.267361 21.4861 0 20.8333 0H4.16667C3.51389 0 2.94444 0.267361 2.55556 0.700231L0.638889 2.83912C0.236111 3.27199 0 3.84491 0 4.45602V20.3704C0 21.7708 1.25 22.9167 2.77778 22.9167H22.2222C23.75 22.9167 25 21.7708 25 20.3704V4.45602C25 3.84491 24.7639 3.27199 24.3611 2.83912ZM4.5 2.5463H20.5L21.625 3.78125H3.38889L4.5 2.5463ZM2.77778 20.3704V6.36574H22.2222V20.3704H2.77778ZM14.5139 8.91204H10.4861V12.7315H6.94444L12.5 17.8241L18.0556 12.7315H14.5139V8.91204Z" fill="#020611"/>
                            </svg>
                        <div>Menu Element 2</div>
                    </li>
                    <li className='menuItem'>
                        <div className='decorator'></div>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3611 2.83912L22.4306 0.700231C22.0556 0.267361 21.4861 0 20.8333 0H4.16667C3.51389 0 2.94444 0.267361 2.55556 0.700231L0.638889 2.83912C0.236111 3.27199 0 3.84491 0 4.45602V20.3704C0 21.7708 1.25 22.9167 2.77778 22.9167H22.2222C23.75 22.9167 25 21.7708 25 20.3704V4.45602C25 3.84491 24.7639 3.27199 24.3611 2.83912ZM4.5 2.5463H20.5L21.625 3.78125H3.38889L4.5 2.5463ZM2.77778 20.3704V6.36574H22.2222V20.3704H2.77778ZM14.5139 8.91204H10.4861V12.7315H6.94444L12.5 17.8241L18.0556 12.7315H14.5139V8.91204Z" fill="#020611"/>
                            </svg>
                        <div>Menu Element 3</div>
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