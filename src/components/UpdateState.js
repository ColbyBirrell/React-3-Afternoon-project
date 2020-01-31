import React from 'react';
import '../App.css';



function UpdateState(props) {
    const { employee } = props
    return (
        <div className='main'>
            <h4 className='number'>{`${employee.id}`}/25</h4>
            <h1 className='name'>{`${employee.name.first} ${employee.name.last}`}</h1>
            <div className='info'>
                <div><strong>From:</strong> {`${employee.city}, ${employee.country}`}</div>
                <div><strong>Job Title:</strong> {employee.title}</div>
                <div><strong>Employer:</strong> {employee.employer}</div>
            </div>
            <ol className='movie-list'><strong>Favorite Movies:</strong>{employee.favoriteMovies.map((element) => {
                return <li className='movie-title'>{element}</li>
            })}</ol>
        </div>
    )









}


export default UpdateState;