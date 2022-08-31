import React from 'react'
import "../style/container.css"
import "../style/button.css"

const workoutCategories = ['DATE', 'EXERCISE', 'TIME', 'COMMENTS']
const prRecord = ['Squat', 'Bench', 'Deadlift']

let prRecordNumObj = {
    squatPR: 225,
    benchPR: 185,
    deadliftPR: 235
}
let prRecordNumObj2 = {
    squatPR: 0,
    benchPR: 0,
    deadliftPR: 0
}

const obj = [prRecordNumObj, prRecordNumObj2]

export const Workout = () => {
    return (
        <div className='container'>
            <caption>CURRENT RECORDS</caption>
            <table>
                <thead>
                    <tr>
                        {prRecord.map((value, index) =>
                            <th key={index}>{value}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {obj.map((item) => (
                        <tr>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                    {/* {obj.map((item) =>(
                    
                   <>
                   <td>{item.squatPR}</td>
                   <td>{item.benchPR}</td>
                   <td>{item.deadliftPR}</td>
                   </>
                    
                ))} */}
                    {/* <td>225</td>
                <td>185</td>
                <td>235</td> */}
                </tbody>
            </table>
            <button className="button-class">RECORD NEW PR</button>
            <caption>WORKOUT LOGS</caption>
            <table>
                <thead>
                    <tr>
                        {workoutCategories.map(function (value, index) { return <th key={index}>{value}</th> })}
                    </tr>
                </thead>
                <tbody>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tbody>
            </table>
            <button className="button-class">Add workout</button>
        </div>
    )
}