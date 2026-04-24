import "./Navbar.css";

function Navbar(){

return(

<header className="navbar">

<div className="logo">
▲ VERTEX
</div>

<nav>
<a href="#">Platform</a>
<a href="#">Features</a>
<a href="#">Pricing</a>
<a href="#">Docs</a>
</nav>

<div className="nav-actions">

<button className="ghost">
Login
</button>

<button className="dark">
Start Deploying
</button>

</div>

</header>

)

}

export default Navbar;