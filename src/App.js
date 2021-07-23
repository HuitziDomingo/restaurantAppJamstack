import { Routes, Route } from 'react-router'
import firebase, { FirebaseContext } from './firebase'
import { Orders, Menu, NewPlat } from './components/pages'
import { SideBar } from './components/ui'

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
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
    </FirebaseContext.Provider>
  );
}

export default App
