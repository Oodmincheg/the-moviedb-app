import React from 'react';
import './checkbox.css';

export const CheckBox = ({
    type,
    className,
    classNameForItem,
    label
}) => (
        <li className={className}>
            <input
            type={type}
            className={classNameForItem}
            />
            <label>{label}</label>
        </li>
    )