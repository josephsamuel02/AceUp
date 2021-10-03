
import { Link } from "react-router-dom";

const LandingPage = () => {




    return ( <div className="landingpage">

 <div className="bgimg"></div>
 <div className="effect"></div>


<div className="welcome">
    <h2>Welcome to AceUp recuitment page</h2>
</div>


<div className="btnholder">

        <Link to="/RegisterUser">
            <button id="reg">Register</button>
        </Link>

        <Link to="/Home">
            <button id="emp">Employees</button>
        </Link>

</div>
        
    </div> );
}
 
export default LandingPage;