import { motion } from "framer-motion";
import "./Hero.css";

function Hero(){

return(

<section className="hero">

<div className="grid-bg"></div>

<div className="shape circle a"></div>
<div className="shape circle b"></div>
<div className="shape square a"></div>
<div className="shape tri t1"></div>
<div className="shape tri t2"></div>


<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="hero-inner"
>

<span className="eyebrow">
Developer Platform
</span>

<h1>
Develop.
Preview.
Deploy.
</h1>

<p>
The complete platform to build,
preview and ship modern applications.
</p>


<div className="hero-actions">

<button className="primary-btn">
Start Free
<span>→</span>
</button>

<button className="secondary-btn">
Documentation
</button>

</div>

</motion.div>



<motion.div
initial={{opacity:0,y:40,scale:.96}}
animate={{opacity:1,y:0,scale:1}}
transition={{delay:.4}}
className="browser"
>

<div className="browser-top">
<span></span>
<span></span>
<span></span>
</div>


<div className="dashboard-ui">

<div className="top-row">
<div className="metric"></div>
<div className="metric"></div>
<div className="metric"></div>
</div>

<div className="graph-area"></div>

<div className="deployments">
<div></div>
<div></div>
<div></div>
</div>

</div>

</motion.div>

</section>

)

}

export default Hero;