import React from 'react'

const budgetCategories = ["Gas","Primerica","Shopping","Restaurant","Lunch","Fun","Parents","Student Loans","Bike Fund",];


export const Budget = () => {
    return (
        <div>
            <div>
            Budget Section
            </div>
        <table>
            <tr>{budgetCategories.map(function (value, index) {return <th key={index}>{value}</th>})}</tr>
        </table>
        </div>
    )
}