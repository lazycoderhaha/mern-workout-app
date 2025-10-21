import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext.jsx';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const { dispatch } = useWorkoutsContext();


    const workoutForm = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };

        try {
            const response = await fetch('http://localhost:3000/api/workouts', {
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const json = await response.json()
            if (!response.ok) {
                setEmptyFields(json.emptyFields || []);
                setError(json.error);
            }
            if (response.ok) {
                console.log('New Workout Added:', json);
                dispatch({ type: 'ADD_WORKOUT', payload: json })
                // clear the form
                setTitle('');
                setLoad('');
                setReps('');
                setEmptyFields([]);
                setError(null);
            }


        } catch (error) {
            console.log(error);
            setError("Something went wrong. Please try again later.");

        }


    }



    return (
        <div>
            <form action="" method="post" onSubmit={workoutForm}>
                <h3>Add a New Workout</h3>
                <label htmlFor="title">Exercise Title:</label>
                <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />

                <label htmlFor="load">Load (in kg):</label>
                <input type="number" id="load" name="load" onChange={(e) => setLoad(e.target.value)} className={emptyFields.includes('load') ? 'error' : ''} />

                <label htmlFor="reps">Number of Reps:</label>
                <input type="number" id="reps" name="reps" onChange={(e) => setReps(e.target.value)} className={emptyFields.includes('reps') ? 'error' : ''} />

                <button type="submit">Add Workout</button>
            </form>

            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default WorkoutForm