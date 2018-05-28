import React from 'react';
import './textarea.css';

export const Textarea = ({
    className,
    classNameForWrapper,
    label,
    onChange,
    name
}) => {
    return (
        <div className={classNameForWrapper}>
            <label>{label}</label>
            <textarea
                className={className}
                name='name'
                onChange={onChange}
            ></textarea>
        </div>
    );
};

