import { Routes, Route } from 'react-router'
import Orders from './components/pages/Orders'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App
