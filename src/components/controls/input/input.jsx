import React from 'react';
import './input.css';

export const Input = ({
    type,
    className,
    classNameForWrapper,
    label,
    onChange,
    name
}) => (
        <div className={classNameForWrapper}>
            <label>{label}</label>
            <input
                type={type}
                className={className}
                onChange={onChange}
                name={name}
            />
        </div>
    );