import { motion } from "framer-motion";
import "./Features.css";

const features=[
{
title:"Instant Deployments",
desc:"Ship globally in seconds"
},
{
title:"Preview URLs",
desc:"Review every change"
},
{
title:"Edge Network",
desc:"Worldwide performance"
},
{
title:"Analytics",
desc:"Production insights"
}
]

function Features(){

return(

<section className="features">

<div className="feature-heading">

<h2>
Everything Your Team Needs
</h2>

<p>
Developer experience meets infrastructure.
</p>

</div>


<div className="feature-grid">

{features.map((item,index)=>(

<motion.div
whileHover={{y:-8}}
className="feature-card"
key={index}
>

<div className="feature-visual">

<div className="mini-window">

<div className="dots-row">
<span></span>
<span></span>
<span></span>
</div>

<div className="mini-lines">
<div></div>
<div></div>
<div></div>
</div>

</div>

</div>

<div className="feature-content">

<h3>
{item.title}
</h3>

<p>
{item.desc}
</p>

<a href="#">
See More +
</a>

</div>

</motion.div>

))}

</div>

</section>

)

}

export default Features;