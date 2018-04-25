import React from 'react';
import './input.css';

export const Input = ({
    type,
    className,
    classNameForWrapper,
    classNameForLabel,
    label
}) => (
        <div className={classNameForWrapper}>
            <label className={classNameForLabel}>{label}</label>
            <input
                type={type}
                className={className}
                required
            />
        </div>
    );