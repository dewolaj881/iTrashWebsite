import 'tailwindcss/tailwind.css'
import Nav from "../components/Nav";
import Showcase from "../components/Showcase"

export default function Home() {
  return (

    <div className="fixed-showcase">
      <Nav></Nav>
      <Showcase></Showcase>
    </div>
  )
}
