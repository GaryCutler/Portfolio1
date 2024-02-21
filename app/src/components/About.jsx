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
            I was born and raised in Southfield, Michigan. Growing up I was really into sports such as football and lacrosse and was an Under Armor Underclass all American and a 3-Time All State lacrosse player as a goalie and defenseman. I went on to play lacrosse in college at Madonna University while studying computer science and transferred to Limestone University to play D2 lacrosse as a goalie. When COVID hit, I moved home to help out my family during hard financial times. In 2023, I graduated from Michigan State University with a certificate in Full Stack Development. In my free time I enjoy watching football, training for half marathons, and trying new video games. I got into coding and development because of my love of video games and computers. My favorite thing about software development is the satisfaction when you finally solve a problem or fix a bug. 
            </p>
        </div>
    </div>
  )
}

export default About