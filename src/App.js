import { Link, Element, scroller } from 'react-scroll';
import { Home12Icon, UserCircle02Icon, Linkedin01Icon, Mail01Icon, Github01Icon, Facebook01Icon, WhatsappIcon } from "hugeicons-react";
import { useState, useEffect } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const sectionNames = ['home', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        const currentIndex = sectionNames.indexOf(currentSection);
        const nextIndex = Math.min(currentIndex + 1, sectionNames.length - 1);
        if (currentIndex !== nextIndex) {
          setCurrentSection(sectionNames[nextIndex]);
          scroller.scrollTo(sectionNames[nextIndex], {
            duration: 500,
            smooth: 'easeInOutQuad',
          });
        }
      } else {
        // Scrolling up
        const currentIndex = sectionNames.indexOf(currentSection);
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (currentIndex !== prevIndex) {
          setCurrentSection(sectionNames[prevIndex]);
          scroller.scrollTo(sectionNames[prevIndex], {
            duration: 500,
            smooth: 'easeInOutQuad',
          });
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="body">
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                <Home12Icon />
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                <UserCircle02Icon />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <Element name="home" className="element">
          <section className='page'>
            <div className='header'>
              <span className='path'><span className='circle'>⬤</span> Software developer</span>
              <h1 className='title'>I'm Jesus</h1>
              <span className='info'>Find out about me and my passion for development.</span>
            </div>
            <div className='body'>
                          
            </div>
          </section>
        </Element>
        <Element name="about" className="element">
          <section className='page'>
            <div className='header'>
              <span className='path'><span className='circle'>⬤</span> About me</span>
              <h1 className='title'>About me</h1>
              <span className='info'>Find out about me and my passion for development.</span>
            </div>
            <div className='body'>
              <div className='card-2'>
                <div className='aboutme'>
                  <div className='contact'>
                    <div className='img'>
                      <div className='src'></div>
                    </div>
                    <div className='social'>
                      <a href='mailto:jesusns1902@outlook.com' target='_blank' rel="noreferrer"><Mail01Icon size={26}/></a>
                      <a href='https://github.com/TYisusDv' target='_blank' rel="noreferrer"><Github01Icon size={26}/></a>
                      <a href='https://www.linkedin.com/in/tyisusdv/' target='_blank' rel="noreferrer"><Linkedin01Icon size={26}/></a>
                      <a href='https://www.facebook.com/tyisusdv' target='_blank' rel="noreferrer"><Facebook01Icon size={26}/></a>
                      <a href='https://wa.me/523481468309' target='_blank' rel="noreferrer"><WhatsappIcon size={26}/></a>
                    </div>
                  </div>
                  <div className='description'>
                    <h1>I'm Jesus</h1>
                    <h2>Full Stack developer</h2>
                    <p className='text color-grey overflow-x'>
                      My name is <b>Jesús Navarro Salcido</b>, Computer Systems Engineering student, I am in the <b>9th semester</b> (without starting). I am a <b>Full Stack developer</b> with experience in various <b>technologies</b> and <b>programming languages</b>. My main competencies include: Python, Django, Flask, React, APIs Rest, SQL & NOSQL. I consider myself a versatile professional and always willing to <b>learn new technologies and methodologies</b> to improve my skills and adapt to the needs of the project. I do not limit myself to a single technology, but I continually seek to expand my <b>knowledge</b> to offer the best possible <b>solutions</b>. My approach focuses on <b>problem solving</b>, teamwork and effective <b>communication</b>, ensuring that each project I participate in meets the highest standards of <b>quality and efficiency</b>.
                    </p>
                  </div>
                </div>
              </div>              
            </div>
          </section>
        </Element>
      </div>
    </div>
  );
}

export default App;