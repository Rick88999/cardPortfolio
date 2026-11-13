import Card from './Card'
import linksAboutUs from './linksAboutUs.json'
import projectsJson from './projectsData.json'
import fotoProfilo from './foto_profilo.png'
import './css/App.css'

function App() {
  const linksDataAboutUs = Object.values(linksAboutUs.links)
  const projectsData = Object.values(projectsJson.projects)

  return (
    <>

      <main style={{ padding: '60px 20px 20px' }}>
        <Card title="Tulini Riccardo" description="Laureato in Ingegneria dell'Informazione alla Sapienza Università di Roma. Sviluppatore WEB (Front/Back-End) & VR/XR" imageUrl={fotoProfilo} links={linksDataAboutUs} projects={projectsData}   />
      </main>
    </>
  )
}

export default App
