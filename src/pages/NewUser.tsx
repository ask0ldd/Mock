import './NewUser.css'
import Header from "../components/Header"
import MainNavBar from "../components/MainNavBar"

function NewUser(){
return(
    <>
      <Header/>
      <main>
        <MainNavBar/>
        <section className='newUserBody'>
            <h1>Main / Sub Crumb</h1>
            <div className='userFormContainer'>
                <div className="formHeader">
                    <div style={{borderBottom:'1px solid #B5241F'}} className="formStep colors1">
                        <div className='circle color1 pdr1'>1</div><span className='formStepTitle'>Form Step</span>
                    </div>
                    <div className="formStep colors2">
                        <div className='circle color2'>2</div><span className='formStepTitle'>Form Step</span>
                    </div>
                    <div className="formStep colors3">
                        <div className='circle color3 pdr1'>3</div><span className='formStepTitle'>Form Step</span>
                    </div>
                </div>
                <form className='formBody'>
                    <div className='leftPanel'>
                        <div className='labelInputGroup'>
                            <label id="namelabel">Nom <span style={{color:'#DC4E49'}}>*</span></label>
                            <input aria-labelledby='namelabel' type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Prénom <span style={{color:'#DC4E49'}}>*</span></label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Société</label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Email <span style={{color:'#DC4E49'}}>*</span></label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Téléphone</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className='rightPanel'>
                        <div className='labelInputGroup'>
                            <label>Avatar</label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Prénom <span style={{color:'#DC4E49'}}>*</span></label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Role <span style={{color:'#DC4E49'}}>*</span></label>
                            <input type="text"></input>
                        </div>
                        <div className='labelInputGroup'>
                            <label>Expiration</label>
                            <input type="text"></input>
                        </div>
                        <div className='buttonsGroup'>
                            <button className='secondaryButton'>Action 1</button>
                            <button className='mainButton' style={{boxShadow: '0 8px 16px rgba(208, 45, 28, 0.2)'}}>Action 2</button>
                        </div>
                    </div>
                </form>
            </div>
            <p style={{marginTop:'20px'}}>
                Role doit être déplacé dans l'onglet 3 puisqu'il induit les droits associés à l'utilisateur.
            </p>
        </section>
      </main>
    </>
)
}

export default NewUser