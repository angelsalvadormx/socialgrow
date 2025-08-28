import { useEffect } from 'react';
import Home from './Pages/Home';
import { setHeadersGoogle } from './utils/setHeadersGoogle';

function App() {

  useEffect(() => {
    setHeadersGoogle(process.env.REACT_APP_GOOGLE_KEY)
  }, [])
  

  return (
    <Home />
  );
}

export default App;
