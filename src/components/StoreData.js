import Header from "./Header";
import StarRating from "./StarRating";

const StoreData = ({ store, countries, books, authors }) => {
  if (!countries || countries.length === 0) {
    return <div>Loading...</div>; // Display a loading message or spinner while the data is being fetched
  }

  const { name, rating, establishmentDate, website, storeImage, relationships } = store.attributes;
  const countryId = relationships.countries.data.id;
  const country = countries.find((c) => c.id === countryId);
  const booksData = relationships.books.data.map((b) => books.find((book) => book.id === b.id));

  return (
    <div className='container'>
      <div className='left'>
        <img src={storeImage} alt='Logo' />
      </div>
      <div className='right'>
        <div className='star'>
          <StarRating rating={rating} />
        </div>
        <Header title={name} />
        <div className='Table'>
          <table className='table'>
            <thead>
              <tr>
                <th colSpan='2'>Best-selling books</th>
              </tr>
            </thead>
            <tbody>
              {booksData.map((book) => (
                <tr key={book.id}>
                  <td>{book.attributes.name}</td>
                  <td>{authors.find((author) => author.id === book.relationships.author.data.id).attributes.fullName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>{establishmentDate}</div>
        <div>
          <a href={website}>Example Website</a>
        </div>
        <div className='flag'>{country.attributes.code}</div>
      </div>
    </div>
  );
};

export default StoreData;