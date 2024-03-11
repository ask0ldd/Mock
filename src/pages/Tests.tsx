/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../components/Header"
import MainNavBar from "../components/MainNavBar"
import './Tests.css'
import success from '../assets/icons/success.png'
import failure from '../assets/icons/failure.png'
import chrome from '../assets/icons/chrome.png'

function Tests(){
    return(
    <>
        <Header/>
        <main>
            <MainNavBar/>
            <section className='testsBody'>
                <div className="titleInputsButtonsContainer">
                    <h1>Tests /</h1><input type="text" className="select"></input>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th className="checkboxCell borderRadiusTopLeft10"><div className="customCheckbox"></div></th>
                                <th>Column 1</th>
                                <th>Col 2</th>
                                <th style={{justifyContent:'center'}}>Col 3</th>
                                <th>Column 4</th>
                                <th>Column 5</th>
                                <th>Column 6</th>
                                <th style={{justifyContent:'center'}}>Col 7</th>
                                <th style={{justifyContent:'center'}}>Column 8</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[0,1,2,3,4,5,6,7,8,9].map((index) => (
                                <tr>
                                    <td className="checkboxCell"><div className="customCheckbox"></div></td>
                                    <td>Row {index} Cell 1</td>
                                    <td>Row {index} Cell 2</td>
                                    <td style={{justifyContent:'center'}}>{index % 3 === 0 ? <img className="statusIcon" src={failure}/> : <img className="statusIcon" src={success}/>}</td>
                                    <td>Row {index} Cell 4</td>
                                    <td>Row {index} Cell 5</td>
                                    <td>Row {index} Cell 6</td>
                                    <td style={{justifyContent:'center'}}><img className="chromeIcon" src={chrome}/></td>
                                    <td style={{justifyContent:'center'}}>Row {index} Cell 8</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                    <div className="tableFooterContainer">
                        <label>Showing 1 to 10 of 100 Items</label>
                        <label className="flexAlignCenter">123 Items sélectionnés</label>
                        <div className="flexAlignRight paginationContainer">
                            <span>Previous</span>
                            <button className="basePaginationButton">1</button>
                            <button className="basePaginationButton active">2</button>
                            <button className="basePaginationButton">3</button>
                            <span>Next</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>)
}

export default Tests