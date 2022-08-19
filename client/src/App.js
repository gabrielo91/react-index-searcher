import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Input } from './components/Input';
import { DataTable } from './components/Table';
import { Container } from './components/Container';
import { useDebounce } from './hooks/useDebounce';
const PORT = process.env.PORT || 8080;

function App() {
  const [apiResult, setApiResult] = useState([]);
  const [queryText, setQueryText] = useState('');
  const debouncedSearchTerm = useDebounce(queryText, 500);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:${PORT}/api/tweets?text=${debouncedSearchTerm}`
      );

      if (response && response.data.data) {
        setApiResult(response.data.data);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <Input
        onChange={(e) => setQueryText(e.target.value)}
        placeholder="Type your search criteria"
      />
      <DataTable data={apiResult} />
    </Container>
  );
}

export default App;
