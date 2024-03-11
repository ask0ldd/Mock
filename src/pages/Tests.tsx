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
                <table>
                    <thead>
                        <tr>
                            <th>[]</th>
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
                                <td>[]</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    </>)
}

export default Tests