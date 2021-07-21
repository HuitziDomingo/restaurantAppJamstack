import { Routes, Route } from 'react-router'
import { Orders, Menu, NewPlat } from './components/pages'
import { SideBar } from './components/ui'

function App() {
  return (
    <div className="">
      <SideBar />
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nuevo-paltillo" element={<NewPlat />} />
      </Routes>
    </div>
  );
}

export default App
