import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/Founder.jpg"
import {options} from 'react-icons/io5';
function Founder() {
const options = {
  initial:{
x:"-100%",
opacity:0,
  },
  whileInView: {
x: 0,
opacity:1,
  }
}
  return <section className='founder'>
<motion.div
{...options}>

<img src={me} alt="Founder" height={200} width={200}/>
  <h3>Anisha Abhilipsa Jena</h3>
  <p>I'm Anisha Abhilipsa Jena the founder of Burger Drip.<br />
  Following your heart will eventually lead you to our burgers.
  </p>
</motion.div>
  </section> 
  
}

export default Founder