
import './App.css'
import { Card } from './components/cards/Card'
import { productData } from './inteface/ProductData';

function App() {
  const data: productData[] =[];
  return (
    <>
     <div className="container">
      <h1>Produtos</h1>
      <div className="card-grid">
    {data.map(productData => <Card price={productData.price} title={productData.title} image={productData.image} />) }  
    
      </div>
      <div className="card-name">

      </div>

     </div>
    </>
  )
}

export default App
