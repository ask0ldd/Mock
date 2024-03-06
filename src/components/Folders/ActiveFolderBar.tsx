import '../../style/Folders/ActiveFolderBar.css'
import bigfoldericon from '../../assets/icons/bigfoldericon.png'
import StatBarSuccessRate from './StatBarSuccessRate'

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
                    <span className='secTextColor'>State 1 : 00 / State 2 : 00</span>
            </div>
            <div className='separator'/>
            <div className='separator mgLeftAuto'/>
        </article>
    )
}
export default ActiveFolderBar