import { useEffect, useState } from "react"
import SingleWorkout from "../components/SingleWorkout.jsx"
import WorkoutForm from "../components/WorkoutForm.jsx";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts');
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        }
        fetchWorkouts()

    }, [dispatch])
    return (
        <div className='home'>
            <div className="workouts">
                {
                    workouts && workouts.map((workout) => {
                        return <SingleWorkout key={workout._id} workout={workout} />
                    })
                }
            </div>
            <WorkoutForm />

        </div>
    )
}

export default Home