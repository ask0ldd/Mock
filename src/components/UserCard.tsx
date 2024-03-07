import '../style/UserCard.css'

// Composant principal de la page Users
function UserCard({avatarFileName, role} : {avatarFileName : string, role : string} ){

    const roleClasses : IRoleClasses = {
        "SUPERHERO" : "tagSuperHero",
        "HERO" : "tagHero"
    }

    const heading = "Heading heading"

    const maxHeadingLength = 20

    return(
        <article className='userCard shadow'>
            <div className='leftSide'>
                <h2>{heading.length > maxHeadingLength ? heading.slice(0,maxHeadingLength) + '...' : heading} </h2>
                <span>Subheading</span>
                <span>XXXXXXXXXXXXXXXXXXXX</span>
                <span className='fs14'>State : 12/13/2024</span>
                <div className={roleClasses[role as keyof IRoleClasses]}>{role.toUpperCase()}</div>
            </div>
            <div className='rightSide'>
                <img src={"./avatars/"+ avatarFileName + ""}/>
                <div className='buttonsContainer'>
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
            </div>
        </article>
    )
}

export default UserCard

interface IRoleClasses {
    SUPERHERO: string;
    HERO: string;
}