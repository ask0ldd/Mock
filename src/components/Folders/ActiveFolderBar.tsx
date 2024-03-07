import '../../style/Folders/ActiveFolderBar.css'
// import bigfoldericon from '../../assets/icons/bigfoldericon.png'
import StatBarSuccessRate from './StatBarSuccessRate'
// import blackarchivefoldericon24 from '../../assets/icons/blackarchivefoldericon24.svg'

function ActiveFolderBar({ratio} : {ratio : number}) {
    return (
        <article className='activeFolderContainer shadow'>
            <figure className='folderIconContainer'>
                <svg className='folderIcon' width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.2 0C1.869 0 0 1.869 0 4.2V29.4C0 30.5139 0.442499 31.5822 1.23015 32.3698C2.0178 33.1575 3.08609 33.6 4.2 33.6H37.8C38.9139 33.6 39.9822 33.1575 40.7698 32.3698C41.5575 31.5822 42 30.5139 42 29.4V8.4C42 7.28609 41.5575 6.2178 40.7698 5.43015C39.9822 4.6425 38.9139 4.2 37.8 4.2H21L16.8 0H4.2ZM4.2 8.4H37.8V29.4H4.2V8.4ZM21 10.5V14.7H27.3V10.5H21ZM29.4 10.5V14.7H35.7V10.5H29.4ZM21 16.8V21H27.3V16.8H21ZM29.4 16.8V21H35.7V16.8H29.4ZM21 23.1V27.3H27.3V23.1H21ZM29.4 23.1V27.3H35.7V23.1H29.4Z" fill="#020611"/>
                </svg>
            </figure>
            <div className='colMainDatasContainer'>
                    <span className='heading'>Heading</span>
                    <span className='secTextColor TYminus4'>Prim State : 26/11/2024  - Sec State : 28/12/2024</span>
                    <span className='secTextColor'>URL : <a href="#">http://www.randomwebsite.com/randomressource</a></span>
            </div>
            <div className='separator'/>
            <div className='colStatsContainer'>
                    <span className='heading'>Heading</span>
                    <StatBarSuccessRate ratio={ratio}/>
                    <span className='secTextColor' style={{marginTop:'8px'}}>State 1 : 00 / State 2 : 00</span>
            </div>
            <div className='separator'/>
            <div className='separator mgLeftAuto' style={{marginRight:'30px'}}/>
            <div style={{display:'flex', columnGap:'15px', paddingRight:'10px'}}>
                <button className='smallCommonButton' type="button">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3867 2.97333L21.5333 0.733333C21.1733 0.28 20.6267 0 20 0H4C3.37333 0 2.82667 0.28 2.45333 0.733333L0.613333 2.97333C0.226667 3.42667 0 4.02667 0 4.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V4.66667C24 4.02667 23.7733 3.42667 23.3867 2.97333ZM4.32 2.66667H19.68L20.76 3.96H3.25333L4.32 2.66667ZM2.66667 21.3333V6.66667H21.3333V21.3333H2.66667ZM13.9333 9.33333H10.0667V13.3333H6.66667L12 18.6667L17.3333 13.3333H13.9333V9.33333Z" fill="#020611"/>
                    </svg>
                </button>
                <button className='smallCommonButton' type="button">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3867 2.97333L21.5333 0.733333C21.1733 0.28 20.6267 0 20 0H4C3.37333 0 2.82667 0.28 2.45333 0.733333L0.613333 2.97333C0.226667 3.42667 0 4.02667 0 4.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V4.66667C24 4.02667 23.7733 3.42667 23.3867 2.97333ZM4.32 2.66667H19.68L20.76 3.96H3.25333L4.32 2.66667ZM2.66667 21.3333V6.66667H21.3333V21.3333H2.66667ZM13.9333 9.33333H10.0667V13.3333H6.66667L12 18.6667L17.3333 13.3333H13.9333V9.33333Z" fill="#020611"/>
                    </svg>
                </button>
                <button className='smallCommonButton' type="button">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3867 2.97333L21.5333 0.733333C21.1733 0.28 20.6267 0 20 0H4C3.37333 0 2.82667 0.28 2.45333 0.733333L0.613333 2.97333C0.226667 3.42667 0 4.02667 0 4.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V4.66667C24 4.02667 23.7733 3.42667 23.3867 2.97333ZM4.32 2.66667H19.68L20.76 3.96H3.25333L4.32 2.66667ZM2.66667 21.3333V6.66667H21.3333V21.3333H2.66667ZM13.9333 9.33333H10.0667V13.3333H6.66667L12 18.6667L17.3333 13.3333H13.9333V9.33333Z" fill="#020611"/>
                    </svg>
                </button>
                <button className='smallCommonButton' type="button">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3867 2.97333L21.5333 0.733333C21.1733 0.28 20.6267 0 20 0H4C3.37333 0 2.82667 0.28 2.45333 0.733333L0.613333 2.97333C0.226667 3.42667 0 4.02667 0 4.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V4.66667C24 4.02667 23.7733 3.42667 23.3867 2.97333ZM4.32 2.66667H19.68L20.76 3.96H3.25333L4.32 2.66667ZM2.66667 21.3333V6.66667H21.3333V21.3333H2.66667ZM13.9333 9.33333H10.0667V13.3333H6.66667L12 18.6667L17.3333 13.3333H13.9333V9.33333Z" fill="#020611"/>
                    </svg>
                </button>
            </div>
        </article>
    )
}
export default ActiveFolderBar