import React, { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import LangToggle from './components/LangToggle'
import { generateWorkout } from './utils/functions';



function App() {
  const [level, setLevel] = useState('beginner');
  const [location, setLocation] = useState('gym');
  const [poison, setPoison] = useState('upper_lower');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('growth_hypertrophy');
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState('');

  function updateMuscles(newMuscles){
    setMuscles(newMuscles);
    setError('');
  }

  function updateWorkout(){
    if(muscles.length < 1){
      // Store the message key so it follows language changes.
      setError(poison === 'individual' ? 'err.noMuscles' : 'err.noDay');
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal, level, location});
    if(newWorkout.length < 1){
      setError('err.empty');
      return
    }
    setError('');
    setWorkout({ exercises: newWorkout, level, goal, id: Date.now() });

    // Wait for the section to render before jumping to it.
    setTimeout(() => document.getElementById('workout')?.scrollIntoView(), 0)
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>

      <LangToggle />
      <Hero />
      <Generator  level={level}
                  setLevel={setLevel}
                  location={location}
                  setLocation={setLocation}
                  poison={poison}
                  setPoison={setPoison}
                  muscles={muscles}
                  setMuscles={updateMuscles}
                  goal={goal}
                  setGoal={setGoal}
                  error={error}
                  updateWorkout={updateWorkout}/>
      {workout && (<Workout key={workout.id} workout={workout} regenerate={updateWorkout} />)}
    </main>
  )
}

export default App
