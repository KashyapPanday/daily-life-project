import React from 'react'
import "../style/container.css"
import "../style/button.css"

const budgetOptions = ["Gas", "Primerica", "Shopping", "Restaurant", "Lunch", "Fun", "Parents", "Student Loans", "Bike Fund",];

const budgetCategories = ['Description', 'Category', 'Date', 'Cost']

export const Budget = () => {
    return (
        <div className='container'>
            <table>
                <tr>{budgetCategories.map(function (value, index) { return <th key={index}>{value}</th> })}</tr>
            </table>
        </div>
    )
}