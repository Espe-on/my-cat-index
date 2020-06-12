﻿import React from "react";

import "./card.styles.css";

export const Card = props => (
    <div className="card-container">
        <img alt={`a picture of ${props.cat.name}`}
             src={`${process.env.PUBLIC_URL}/catpics/${props.cat.name.toLowerCase()}.jpeg`}
             className="cat-pic"
        />
        <h2> {props.cat.name} </h2>
    </div>
)