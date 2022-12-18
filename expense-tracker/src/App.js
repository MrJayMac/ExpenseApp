import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Container  from 'react-bootstrap/Container';
import Cards from './components/Cards/Cards'

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="primary">Add Expense</Button>
      </Stack>
      <div className="information">
        <Cards name="Entertainment" amount={100} max={1000}></Cards>
      </div>
    </Container>
  );
}

export default App;
