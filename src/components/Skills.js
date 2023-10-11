import './styles/Skills.css'

function Skills() {

  const skillDetails = [
    {icon:'fa-brands fa-html5', skillName:'html',percent:90},
    {icon:'fa-brands fa-css3', skillName:'css',percent:85},
    {icon:'fa-brands fa-square-js', skillName:'javascript',percent:87},
    {icon:'fa-brands fa-react', skillName:'react',percent:80},
    {icon:'fa-brands fa-square-js', skillName:'next js',percent:50},
    {icon:'fa-brands fa-node-js', skillName:'node js',percent:75},
    {icon:'fa-solid fa-database', skillName:'mongoDB',percent:80},
    {icon:'fa-brands fa-figma', skillName:'figma',percent:70},
    {icon:'fa-solid fa-server', skillName:'express js',percent:70},
    {icon:'fa-brands fa-bootstrap', skillName:'bootstrap',percent:85},
    {icon:'fa-solid fa-code', skillName:'tailwind',percent:80},
    {icon:'fa-solid fa-code', skillName:'material ui',percent:75},
    {icon:'fa-solid fa-c', skillName:'programming',percent:80},
    {icon:'fa-solid fa-code', skillName:'C++',percent:70},
    {icon:'fa-brands fa-java', skillName:'Java',percent:85},
    {icon:'fa-brands fa-python', skillName:'Python',percent:75},
    {icon:'fa-brands fa-git-alt', skillName:'git',percent:85},
    {icon:'fa-brands fa-github', skillName:'github',percent:70},
]
  return (
    <section className="skill-section">
      <div className="container-xl">
        <div className="skill-heading">
          <h2><i className="fa-solid fa-code"></i> My <span>Skills!</span></h2>
        </div>
        <div className="row">
          {
            skillDetails.map(skill=><Progress skillName={skill.skillName} percent={skill.percent} icon={skill.icon}/>)
          }       
        </div>
      </div>
    </section>
  )
}

function Progress({skillName, percent=0, icon}) {
  return (
      <div className="progress-container">
        <div className="progress-wrap">
          <h3><i className={icon}></i> {skillName}</h3>
          <div className="progress">
            <div className="progress-bar" style={{width:`${percent}%`}}>
              <span>{percent}%</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skills
