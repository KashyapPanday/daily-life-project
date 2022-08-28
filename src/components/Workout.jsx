import React from 'react'

const workoutCategories = ['DATE','EXERCISE','TIME','COMMENTS']
const prRecord = ['Squat', 'Bench', 'Deadlift']


export const Workout = () => {
    return (
        <div>
        <div>Workout Log</div>
        <table>
            <tr>
            {prRecord.map((value,index) => <th key={index}>{value}</th> )}
            </tr>
        </table>
        <table>
            <tr>
                {workoutCategories.map(function (value, index){ return <th key={index}>{value}</th>})}
            </tr>
        </table>
        </div>
    )
}