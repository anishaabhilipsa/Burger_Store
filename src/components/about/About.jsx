import React from 'react';
import {Link} from "react-router-dom";
import {RiFindReplaceFill} from "react-icons/ri";
import me from "../../assets/Founder.jpg"
const About = () => {
  return (
   <section className='about'>
    <main>
        <h1>About Us</h1>
        <article>
            <h4>Burger Drip</h4>
            <p>Flavors for royalty..</p>
            <p>Click below to explore various types of burgers</p>
            <Link to ="">
                <RiFindReplaceFill />
            </Link>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="Founder" />
                </div>
                <p>I am Anisha Abhilpsa Jena the founder of Burger Drip.We're trying to bring class to cuisine.</p>

            </article>
        </div>
    </main>
   </section>
  )
}

export default About;