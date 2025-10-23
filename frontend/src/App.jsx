import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import WorkoutDetail from './components/WorkoutDetail.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workouts/:id' element={<WorkoutDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App