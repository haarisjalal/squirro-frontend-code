import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StarRating from './components/StarRating';
import Table from './components/Table';
import StoreData from './components/StoreData';
import axios from 'axios';

function App() {
  const [stores, setStores] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/stores');
        console.log(response)
        
        setStores(response.data.data);
        setBooks(response.data.included.filter(item => item.type === 'books'));
        setAuthors(response.data.included.filter(item => item.type === 'authors'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <>

      <div className='Table'>
        {/* Creating the table here */}
      </div>

    <Table stores={stores} books={books} authors={authors} />
    


    </>
  );
}

export default App;