import React from 'react';
import './textarea.css';

export const Textarea = ({
    className,
    classNameForLabel,
    classNameForWrapper,
    label
}) => (
        <div className={classNameForWrapper}>
            <label className={classNameForLabel}>
                {label}
            </label>
            <textarea className={className}></textarea>
        </div>
    )