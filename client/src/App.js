import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense } from 'react';
import Student from './components/Student';
import Login from './components/Login';
import Teacher from './components/Teacher';
import Admin from './components/Admin';
import MyRoom from './components/MyRoom';
import Document from './components/Document';

function App() {

  let navi = useNavigate();

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login navi={navi} />} />
        <Route path="/stud/:page" element={<Suspense><Student/></Suspense>} />
        <Route path="/teach" element={<Suspense><Teacher /></Suspense>}>
          <Route path='room' element={<Suspense><MyRoom/></Suspense>} /> 
          <Route path='document' element={<Suspense><Document/></Suspense>}/>
        </Route>
        <Route path="/admin" element={<Suspense><Admin/></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
