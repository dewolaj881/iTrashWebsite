import 'tailwindcss/tailwind.css'
import Nav from "../components/Nav";
import Showcase from "../components/Showcase"
import Card from "../components/Card"

export default function Home() {
  return (

    <div className="fixed-showcase">
      <Nav></Nav>
      <Showcase></Showcase>
      <Card src="../earth.png" alt="text" heading="Ratuj..."></Card>
    </div>
  )
}
