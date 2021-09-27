import React from 'react';
import './DeveloperSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const DeveloperSummary = (props) => {
    const { img, name, Gender, Email, Phone, Salary } = props.developer;
    console.log(props.developer);
    return (
        <div className="developer-summary">
            <div className="container">
                <div className="row row-cols-1 p-2">
                    <div className="card h-100 bottom ">
                        <div className="developer-img p-2">
                            <img className="img" src={img} alt="..." />
                        </div>
                        <div>
                            <h5>{name}</h5>
                            <p>Gender : {Gender}</p>
                            <p>Email : {Email}</p>
                            <p>Phone no : {Phone}</p>
                            <p>Salary : {Salary}Usd </p>
                            <button className="developer-btn" onClick={() => props.handleDeveloperAdded(props.developer)}><FontAwesomeIcon icon={faHandHoldingUsd} /> Pay Salary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperSummary;