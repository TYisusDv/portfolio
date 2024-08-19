import { Link, Element, scroller } from 'react-scroll';
import { UserCircle02Icon, Linkedin01Icon, Mail01Icon, Github01Icon, Facebook01Icon, WhatsappIcon, SkullIcon, MedalFirstPlaceIcon, ChampionIcon, MedalThirdPlaceIcon } from "hugeicons-react";
import { useState, useEffect } from 'react';
import SkillBar from './assets/components/SkillBar';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const sectionNames = ['about', 'skills'];
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return; // Si está en medio de un scroll, no hacer nada

      const currentIndex = sectionNames.indexOf(currentSection);
      let nextIndex = currentIndex;

      if (event.deltaY > 0) {
        nextIndex = Math.min(currentIndex + 1, sectionNames.length - 1);
      } else {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (currentIndex !== nextIndex) {
        setIsScrolling(true);
        setCurrentSection(sectionNames[nextIndex]);

        scroller.scrollTo(sectionNames[nextIndex], {
          duration: 500,
          smooth: 'easeInOutQuad',
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, isScrolling]);

  const skills_frontend = [
    { skill: 'HTML5', percentage: 100, color: '#E5532D' },
    { skill: 'CSS3', percentage: 95, color: '#2D53E5' },
    { skill: 'Javascript', percentage: 87, color: '#F7E025' },
    { skill: 'Sass', percentage: 85, color: '#CF6C9C' },
    { skill: 'React', percentage: 84, color: '#1bA1CC' }    
  ];

  const skills_backend = [
    { skill: 'Python', percentage: 95, color: '#376E98' },
    { skill: 'Java', percentage: 85, color: '#ED272C' },
    { skill: 'Node.js', percentage: 80, color: '#84C208' },
    { skill: 'C#', percentage: 30, color: '#692A7E' },
  ];

  const skills_frameworks = [
    { skill: 'Django', percentage: 93, color: '#113527' },
    { skill: 'Flask', percentage: 90, color: '#43ADC2' },
    { skill: 'ASP .NET', percentage: 30, color: '#692A7E' },
  ];

  const skills_databases = [
    { skill: 'MySQL', percentage: 97, color: '#E48E00' },
    { skill: 'SQL Server', percentage: 83, color: '#CE9899' },
    { skill: 'MongoDB', percentage: 86, color: '#001E2B' },
    { skill: 'Redis', percentage: 70, color: '#C83632' },
  ];

  const skills_tools = [
    { skill: 'Git', percentage: 95, color: '#F05639' },
    { skill: 'Docker', percentage: 85, color: '#0895E7' },
    { skill: 'VS Code', percentage: 100, color: '#2AAFF2' },
    { skill: 'Visual Studio', percentage: 70, color: '#BE8EF3' },
    { skill: 'Arduino', percentage: 60, color: '#089A9F' },
    { skill: 'Linux', percentage: 90, color: '#F7BF18' },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="body">
          <ul>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                <UserCircle02Icon />
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                <SkullIcon />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <Element name="about" className="element">
          <section className='page'>
            <div className='header'>
              <span className='path'><span className='circle'>⬤</span> Software developer</span>
              <h1 className='title'>Hi,</h1>
              <span className='info'>Discover my passion for software development.</span>
            </div>
            <div className='body'>
              <div className='d-flex gap-10px fd-column align-items-center'>
                <div className='card-2'>
                  <div className='aboutme'>
                    <div className='contact'>
                      <div className='img'>
                        <div className='src'></div>
                      </div>
                      <div className='social'>
                        <a href='mailto:jesusns1902@outlook.com' target='_blank' rel="noreferrer" className='hover-email'><Mail01Icon size={26}/></a>
                        <a href='https://github.com/TYisusDv' target='_blank' rel="noreferrer" className='hover-github'><Github01Icon size={26}/></a>
                        <a href='https://www.linkedin.com/in/tyisusdv/' target='_blank' rel="noreferrer" className='hover-linkedin'><Linkedin01Icon size={26}/></a>
                        <a href='https://www.facebook.com/tyisusdv' target='_blank' rel="noreferrer" className='hover-facebook'><Facebook01Icon size={26}/></a>
                        <a href='https://wa.me/523481468309' target='_blank' rel="noreferrer" className='hover-whatsapp'><WhatsappIcon size={26}/></a>
                      </div>
                    </div>
                    <div className='description'>
                      <h1>I'm Jesus</h1>
                      <h2 className='text-animated'>Full Stack developer</h2>
                      <p className='text color-grey overflow'>
                        My name is <b>Jesús Navarro Salcido</b>, Computer Systems Engineering student, I am in the <b>9th semester</b> (without starting). I am a <b>Full Stack developer</b> with experience in various <b>technologies</b> and <b>programming languages</b>. My main competencies include: Python, Django, Flask, React, APIs Rest, SQL & NOSQL. I consider myself a versatile professional and always willing to <b>learn new technologies and methodologies</b> to improve my skills and adapt to the needs of the project. I do not limit myself to a single technology, but I continually seek to expand my <b>knowledge</b> to offer the best possible <b>solutions</b>. My approach focuses on <b>problem solving</b>, teamwork and effective <b>communication</b>, ensuring that each project I participate in meets the highest standards of <b>quality and efficiency</b>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='card-2 d-flex flex-wrap fd-column align-items-center gap-5px'>
                  <div className='d-flex gap-5px' style={{ marginBottom: '8px' }}>
                    <ChampionIcon style={{color: "#ebcb8b"}} />
                    <h2 style={{ paddingTop: '3px'}}> Awards</h2>
                  </div>
                  <div className='panel flex-wrap align-items-end gap-5px'>
                    <MedalThirdPlaceIcon style={{color: "#CD7F32"}} /> <b>Programming contest.</b> 3rd place in the advanced Java programming at the Higher Technological Institute of Arandas in the 8th Semester in Jan 2024.
                  </div>
                  <div className='panel flex-wrap align-items-end gap-5px'>
                    <MedalFirstPlaceIcon style={{color: "#FFD700"}} /> <b>TouchTrack Project.</b> 1st place in science week at the Higher Technological Institute of Arandas in the 7th Semester in Nov 2023.
                  </div>
                  <div className='panel flex-wrap align-items-end gap-5px'>
                    <MedalThirdPlaceIcon style={{color: "#CD7F32"}} /> <b>AgaMarket Project.</b> 3rd place in science week at the Higher Technological Institute of Arandas in the 5th Semester in 2022.
                  </div>
                </div>     
              </div>         
            </div>
          </section>
        </Element>
        <Element name="skills" className="element">
          <section className='page'>
            <div className='header'>
              <span className='path'><span className='circle'>⬤</span> Skills</span>
              <h1 className='title'>My skills</h1>
              <span className='info'>These are my skills in software development.</span>
            </div>
            <div className='body '>
              <div className='d-flex skills gap-10px'>
                <div className='card d-flex fd-column align-items-center' style={{ maxWidth: '500px' }}>
                  <h2 style={{ marginBottom: '8px' }}>Frontend</h2>
                  <div className='my-skills'>
                    {skills_frontend.map((skill, index) => (
                      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
                  </div>
                </div>     
                <div className='card d-flex fd-column align-items-center' style={{ maxWidth: '500px' }}>
                  <h2 style={{ marginBottom: '8px' }}>Backend</h2>
                  <div className='my-skills'>
                    {skills_backend.map((skill, index) => (
                      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
                  </div>
                </div> 
                <div className='card d-flex fd-column align-items-center' style={{ maxWidth: '500px' }}>
                  <h2 style={{ marginBottom: '8px' }}>Databases</h2>
                  <div className='my-skills'>
                    {skills_databases.map((skill, index) => (
                      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
                  </div>
                </div>
                <div className='card d-flex fd-column align-items-center' style={{ maxWidth: '500px' }}>
                  <h2 style={{ marginBottom: '8px' }}>Frameworks</h2>
                  <div className='my-skills'>
                    {skills_frameworks.map((skill, index) => (
                      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
                  </div>
                </div>
                <div className='card d-flex fd-column align-items-center' style={{ maxWidth: '500px' }}>
                  <h2 style={{ marginBottom: '8px' }}>Tools</h2>
                  <div className='my-skills'>
                    {skills_tools.map((skill, index) => (
                      <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} color={skill.color} />
                    ))}
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