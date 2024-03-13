import Header from './components/Header';
import './App.css';
import StarRating from './components/StarRating';
import Table from './components/Table';

function App() {
  return (
    <>
    <div className='first-table'>
    <img src="https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg" alt="Logo" />


    <div className='star'>
    <StarRating rating = {4}/>
    </div>

      <Header title='1'/>
      <div className='Table'>
        {/* Creating the table here */}
      </div>

    <Table id='<The ID for the book>'/>

    <div>
      Date for the book store establishment
    </div>

    <div>
    <a href="https://www.example.com">Example Website</a>
    </div>

    <div className='flag'>
      Country Flag Image here
    </div>
    </div>

    {/* The second table start from here */}
    <br/>

    <div className='first-table'>
    <img src="https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg" alt="Logo" />


    <div className='star'>
    <StarRating rating = {4}/>
    </div>

      <Header title='1'/>
      <div className='Table'>
        {/* Creating the table here */}
      </div>

    <Table id='<The ID for the book>'/>

    <div>
      Date for the book store establishment
    </div>

    <div>
    <a href="https://www.example.com">Example Website</a>
    </div>

    <div className='flag'>
      Country Flag Image here
    </div>
    </div>

    {/* The third table start from here */}
    <br/>

    <div className='first-table'>
    <img src="https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg" alt="Logo" />


    <div className='star'>
    <StarRating rating = {4}/>
    </div>

      <Header title='1'/>
      <div className='Table'>
        {/* Creating the table here */}
      </div>

    <Table id='<The ID for the book>'/>

    <div>
      Date for the book store establishment
    </div>

    <div>
    <a href="https://www.example.com">Example Website</a>
    </div>

    <div className='flag'>
      Country Flag Image here
    </div>
    </div>

    </>
  );
}

export default App;
























// import React, { useState, useEffect } from 'react';

// const StoreTable = () => {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('http://localhost:3000/stores')
//       .then(response => response.json())
//       .then(data => setStores(data.data));
//   }, []);

//   return (
//     <div>
//       <h1>Stores</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Website</th>
//             <th>Rating</th>
//             <th>Store Image</th>
//             <th>Establishment Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {stores.map(store => (
//             <tr key={store.id}>
//               <td>{store.attributes.name}</td>
//               <td>{store.attributes.website}</td>
//               <td>{store.attributes.rating}</td>
//               <td>{store.attributes.storeImage}</td>
//               <td>{new Date(store.attributes.establishmentDate).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StoreTable;