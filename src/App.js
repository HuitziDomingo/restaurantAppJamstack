import { Routes, Route } from 'react-router'
import { Orders, Menu, NewPlat } from './components/pages'
import { SideBar } from './components/ui'

function App() {
  return (
    <div className="md:flex min-h-screen">
      <SideBar />
      <div className="md:w-3/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuevo-paltillo" element={<NewPlat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
