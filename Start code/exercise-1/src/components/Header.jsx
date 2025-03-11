import pnLogo from "../assets/pn-logo.png";

function Header({name}){
    return(
        <header id = "header">
            <img src = {pnLogo} alt = "PN Logo"></img>
            <h1>Student results for {name}</h1>
        </header>
    )
}

export default Header;