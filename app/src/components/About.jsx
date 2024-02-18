import React from 'react'
import "../styles/about.css"
import coolDude from '../img/coolDude.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='imageWrapper'>
            <img src={coolDude} />
        </div>
        <div className='content'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, 
                iusto! Rerum quidem voluptatem, quae laudantium amet deserunt harum eos
                dolorum repellendus cumque non dolorem beatae laboriosam reiciendis eligendi ducimus nesciunt?
            </p>
        </div>
    </div>
  )
}

export default About