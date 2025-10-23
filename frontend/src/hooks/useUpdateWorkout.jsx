import { useState } from 'react';
import { useWorkoutsContext } from './useWorkoutsContext';


export const useUpdateWorkout = () => {
    const updateWorkoutRequest = async (id, workout, setError, setEmptyFields) => {
        try {
            const response = await fetch('http://localhost:3000/api/workouts/' + id, {
                method: 'PATCH',
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
                console.log('Workout Updated:', json);
                // clear the form
                setEmptyFields([]);
                setError(null);
                console.log("Data updated successfully");
            }
        } catch (error) {
            console.log(error);
            setError("Something went wrong. Please try again later.");
        }
    }
    return { updateWorkoutRequest };
}
