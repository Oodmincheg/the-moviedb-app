import React from 'react';
import './poster.css';

export const Poster = ({ className, src, alt, title }) => {
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            title={title}
        />
    );
};