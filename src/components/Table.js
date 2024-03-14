import StarRating from "./StarRating";
import { useEffect, useState } from "react";

const Table = ({ stores, books, authors }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  const [countryFlags, setCountryFlags] = useState({});

  useEffect(() => {
    const fetchCountryFlags = async () => {
      const countryCodes = stores.map((store) => store.relationships.countries?.data[0]?.id).filter(Boolean);
      const uniqueCountryCodes = Array.from(new Set(countryCodes));

      const countryFlagsData = await Promise.all(
        uniqueCountryCodes.map(async (code) => {
          try {
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
            if (!response.ok) {
              throw new Error('Failed to fetch country flag');
            }
            const data = await response.json();
            return { code, flag: data.flag };
          } catch (error) {
            console.error(error);
            return { code, flag: null };
          }
        })
      );

      const flags = {};
      countryFlagsData.forEach((country) => {
        flags[country.code] = country.flag;
      });
      setCountryFlags(flags);
    };

    fetchCountryFlags();
  }, [stores]);

  return (
    <div>
      {stores.map((store) => {
        const countryCode = store.relationships.countries?.data[0]?.id;
        const storeImage = store.attributes.storeImage;
        return (
          <div className="store" key={store.id}>
            <div className="container">
              <div className="left">
            <div className="store-image">
              {storeImage ? (
                <img src={storeImage} alt="Store Image" />
              ) : (
                'Store image not available'
              )}
            </div>
            </div>
            <div className="right">
            <div>
              <StarRating store={store} />
            </div>
            <h2>{store.attributes.name}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Books</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                
              {store.relationships.books?.data.length === 0 || !store.relationships.books?.data ? (
  <tr>
    <td colSpan="2">No books found</td>
  </tr>
) : (
  store.relationships.books?.data.map((book) => {
    const foundBook = books.find((b) => b.id === book.id);
    if (foundBook) {
      const authorId = foundBook.relationships.author?.data?.id;
      const author = authors.find((a) => a.id === authorId);
      const authorName = author?.attributes?.fullName || 'No author found';
      return (
        <tr key={foundBook.id}>
          <td>{foundBook.attributes.name}</td>
          <td>{authorName}</td>
        </tr>
      );
    } else {
      return (
        <tr key={book.id}>
          <td>{'No books found'}</td>
          <td>{'No author found'}</td>
        </tr>
      );
    }
  })
)}
              </tbody>
            </table>
            <div className="store-info">
              <p><a href={store.attributes.website || '#'}>{store.attributes.website || 'Not available'}</a></p>
              <p>{formatDate(store.attributes.establishmentDate)}</p>
            </div>
            <div className="flag">
              {countryFlags[countryCode] ? (
                <img src={countryFlags[countryCode]} alt="Country Flag" />
              ) : (
                'Country flag not available'
              )}
            </div>
          </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
