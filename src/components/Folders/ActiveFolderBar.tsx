import '../../style/Folders/ActiveFolderBar.css'
import bigfoldericon from '../../assets/icons/bigfoldericon.png'
import StatBarSuccessRate from './StatBarSuccessRate'
import blackarchivefoldericon from '../../assets/icons/blackarchivefoldericon.png'

function ActiveFolderBar() {
    return (
        <article className='activeFolderContainer'>
            <figure className='folderIconContainer'>
                <img src={bigfoldericon} className='folderIcon'/>
            </figure>
            <div className='colMainDatasContainer'>
                    <span className='heading'>Heading</span>
                    <span className='secTextColor TYminus3'>Prim State : 26/11/2024  - Sec State : 28/12/2024</span>
                    <span className='secTextColor'>URL : <a href="#">http://www.randomwebsite.com/randomressource</a></span>
            </div>
            <div className='separator'/>
            <div className='colStatsContainer'>
                    <span className='heading'>Heading</span>
                    <StatBarSuccessRate/>
                    <span className='secTextColor' style={{marginTop:'8px'}}>State 1 : 00 / State 2 : 00</span>
            </div>
            <div className='separator'/>
            <div className='separator mgLeftAuto' style={{marginRight:'30px'}}/>
            <div style={{display:'flex', columnGap:'15px', paddingRight:'10px'}}>
                <button className='smallCommonButton' type="button">
                    <img src={blackarchivefoldericon} alt=""/>
                </button>
                <button className='smallCommonButton' type="button">
                    <img src={blackarchivefoldericon} alt=""/>
                </button>
                <button className='smallCommonButton' type="button">
                    <img src={blackarchivefoldericon} alt=""/>
                </button>
                <button className='smallCommonButton' type="button">
                    <img src={blackarchivefoldericon} alt=""/>
                </button>
            </div>
        </article>
    )
}
export default ActiveFolderBar