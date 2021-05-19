import 'tailwindcss/tailwind.css'
import Nav from "../components/Nav";
import Showcase from "../components/Showcase"
import MultipleCards from "../components/MultipleCards"

export default function Home() {
  return (

    <div className="fixed-showcase">
      <Nav></Nav>
      <Showcase></Showcase>
      <MultipleCards></MultipleCards>
    </div>
  )
}
