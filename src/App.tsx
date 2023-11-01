
import './App.css'
import Card from './components/cards/Card'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <header><Navbar /></header>

      <section className='card-grid'>
        <Card id={1} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
        <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
        <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
        <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
        
      </section></>
  )
}

export default App
