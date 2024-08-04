import { AboutMe } from "./componets/about-me"
import { Contact } from "./componets/contact"
import { Header } from "./componets/header/Header"
import { Introduction } from "./componets/introduction"
import { Projects } from "./componets/projects"
import { Technologies } from "./componets/techs"

function App() {


  return (
    <div className="absolute top-0 z-[-2] h-fit w-full bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
      rgba(255,255,255,0))]">
        <div className="max-w-7xl ml-auto mr-auto">
          <Header/>
          <Introduction/>
          <AboutMe/>
          <Technologies/>
          <Projects/>
          <Contact/>
        </div>
        
      </div>
  )
}

export default App
