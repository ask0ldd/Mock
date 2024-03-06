import '../style/ActiveFolderBar.css'
import bigfoldericon from '../assets/icons/bigfoldericon.png'

function ActiveFolderBar() {
    return (
        <article className='activeFolderContainer'>
            <figure className='folderIconContainer'>
                <img src={bigfoldericon} className='folderIcon'/>
            </figure>
        </article>
    )
}
export default ActiveFolderBar