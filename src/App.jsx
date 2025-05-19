import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Nav></Nav>

      <div class="row w-100">
        <Card src ="https://images.pexels.com/photos/31940358/pexels-photo-31940358/free-photo-of-serene-spring-evening-with-blooming-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card src ="https://images.pexels.com/photos/31701241/pexels-photo-31701241/free-photo-of-colorful-pink-and-beige-mediterranean-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card src ="https://images.pexels.com/photos/599708/pexels-photo-599708.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>
        <Card src ="https://images.pexels.com/photos/129743/pexels-photo-129743.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>
        <Card src ="https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=600"></Card>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
