import React from 'react'
import "../style/container.css"
import "../style/button.css"

const budgetCategories = ["Gas","Primerica","Shopping","Restaurant","Lunch","Fun","Parents","Student Loans","Bike Fund",];


export const Budget = () => {
    return (
        <div className='container'>
            <caption>Budget Section</caption>
        
        <table>
            <tr>{budgetCategories.map(function (value, index) {return <th key={index}>{value}</th>})}</tr>
        </table>
        </div>
    )
}