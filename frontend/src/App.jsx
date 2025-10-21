import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import WorkoutDetail from './components/WorkoutDetail.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workouts/:id' element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App