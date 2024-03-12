import Header from "../components/Header"
import MainNavBar from "../components/MainNavBar"

function DashboardErrors(){
    return(
        <>
            <Header/>
            <main>
            <MainNavBar/>
            <section className='activeDashboardErrorsBody'>
                <h1>Main / Sub Crumb / Sub Crumb</h1>
                <div className='buttonsInputsSearchBarContainer'>
                <button className='mainButton'>Button Text</button>
                <div className='separator'/>
                <input className='searchInput'/>
                <input className='select'/>
                </div>
                <div className='dashboardErrorsContainer'>
                </div>
            </section>
            </main>
        </>
    )
}

export default DashboardErrors