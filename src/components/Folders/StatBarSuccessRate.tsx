import '../../style/Folders/StatBarSuccessRate.css'

function StatBarSuccessRate({ratio} : {ratio : number}){

    if(ratio > 1) ratio = 1

    return(
        <div className="barContainer">
            <div style={{width:ratio * 250+'px'}} className="greenBar">
            </div>
        </div>
    )
}
export default StatBarSuccessRate