import React from 'react';
import './button.css';

export const Button = ({
    type,
    className,
    modifier,
    label,
    disabled,
    onClick
}) => {
    return (
        <button
            type={type}
            className={`${className} ${modifier}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};