import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/productCard/card';

function App() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
    
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error:", error));
  }, []);


  return (
    <div>

      <div className='header'>
        <img src={reactLogo} className="logo" alt="Vite logo" />
        <h1>Vite + React</h1>
      </div>
      <div className="intro">
        <h2>[GET] https://fakestoreapi.com/products</h2>
        <p>This React app displays product information from an external API using a simple, card-based interface.
        Users can browse through products one at a time using "Next" and "Previous" buttons, with each card showing details like the product's title, price, description, category, and rating. The data is fetched from Fake Store API and managed using React's state and hooks, demonstrating basic concepts like API integration, component communication via props, and user interaction in React 19.</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {products.length > 0 ? (
          <Card
            product={products[count]}
            count={count}
            max={products.length}
            setCount={setCount}
          />
        ) : (
          <p>No hay productos</p>
        )}
      </div>

    </div>
  );
}

export default App
