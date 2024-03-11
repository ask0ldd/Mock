/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../components/Header"
import MainNavBar from "../components/MainNavBar"
import './Tests.css'

function Tests(){
    return(
    <>
        <Header/>
        <main>
            <MainNavBar/>
            <section className='testsBody'>
                <div className="titleInputsButtonsContainer">
                    <h1>Tests /</h1><input></input>
                </div>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th className="checkboxCell borderRadiusTopLeft10"><div className="customCheckbox"></div></th>
                                <th>Column 1</th>
                                <th>Col 2</th>
                                <th>Col 3</th>
                                <th>Column 4</th>
                                <th>Column 5</th>
                                <th>Col 6</th>
                                <th>Column 7</th>
                                <th>Column 8</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[0,1,2,3,4,5,6,7,8,9].map((_) => (
                                <tr>
                                    <td className="checkboxCell"><div className="customCheckbox"></div></td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                    <div className="tableBottomContainer">
                        <label>Showing 1 to 10 of 100 Items</label>
                        <label>123 Items sélectionnés</label>
                        <div>[1][2][3]</div>
                    </div>
                </div>
            </section>
        </main>
    </>)
}

export default Tests