import moment from "moment";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import WorkoutForm from "./WorkoutForm.jsx";
import { Link, useNavigate } from "react-router-dom";


const SingleWorkout = ({ workout }) => {

    const { dispatch } = useWorkoutsContext();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const response = await fetch('http://127.0.0.1:3000/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            console.log('Workout deleted:', json)
        }
        dispatch({ type: 'DELETE_WORKOUT', payload: json })
        console.log("Workout deleted:", workout.title);

    }




    return (
        <div className="workout-details">
            <h4><Link to={`/workouts/${workout._id}`}>{workout.title}</Link></h4>
            <p><strong>Load (kg): </strong>{workout.load} kg</p>
            <p><strong>Number of reps: </strong>{workout.reps} reps</p>
            <p><strong>Posted:</strong> {moment(workout.createdAt).fromNow()}</p>
            <span className="material-symbols-outlined edit-icon" onClick={() => navigate(`/workouts/${workout._id}`)}>edit</span>
            <span className="material-symbols-outlined delete-icon" onClick={handleDelete}>delete</span>
        </div>
    )
}

export default SingleWorkout