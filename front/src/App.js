import { useState } from 'react';
import { Input } from './components/Input';
import { DataTable } from './components/Table';
import { Container } from './components/Container';
import { data } from './database';

function App() {
  const [searchResult, setSearchResult] = useState(data);

  const handleInput = (event) => {
    const searchTerm = new RegExp(event.target.value.toLowerCase());

    if (searchTerm) {
      const filteredResults = data.filter(({ username, message }) => {
        return (
          username.toLowerCase().match(searchTerm) ||
          message.toLowerCase().match(searchTerm)
        );
      });

      setSearchResult(filteredResults);
    }
  };

  return (
    <Container>
      <Input onChange={handleInput} placeholder="Type your search criteria" />
      <DataTable data={searchResult} />
    </Container>
  );
}

export default App;
