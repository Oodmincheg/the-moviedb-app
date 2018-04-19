import React from 'react';
import './button.css';

export const Button = ({
    type,
    className,
    modifier,
    label,
    onClick
}) => (
        <button
            type={type}
            className={`${className} ${modifier}`}
            onClick={onClick}
        >
            {label}
        </button>
    );