// create your App component here
import { useState, useEffect } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImageSrc(data.message);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageSrc} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;