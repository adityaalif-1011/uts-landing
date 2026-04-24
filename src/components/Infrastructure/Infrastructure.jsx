import "./Infrastructure.css";

function Infrastructure(){

return(

<section className="infra">

<div className="infra-visual">

<div className="pulse core">
Core
</div>

<div className="pulse us">
US
</div>

<div className="pulse eu">
EU
</div>

<div className="pulse asia">
Asia
</div>

<div className="link l1"></div>
<div className="link l2"></div>
<div className="link l3"></div>

<div className="stats">

<div className="stat-box">
<h3>150+</h3>
<p>Edge Regions</p>
</div>

<div className="stat-box">
<h3>99.99%</h3>
<p>Uptime</p>
</div>

</div>

</div>



<div className="infra-copy">

<span className="label">
GLOBAL NETWORK
</span>

<h2>
Global Edge
Infrastructure
</h2>

<p>
Deliver applications closer to users
with high availability and low latency.
</p>

<ul>
<li>Instant routing</li>
<li>Distributed compute</li>
<li>Automatic scaling</li>
</ul>

<button>
Explore Infrastructure →
</button>

</div>

</section>

)

}

export default Infrastructure;