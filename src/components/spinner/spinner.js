import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-border text-primary custom-spinner" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
};

export default Spinner;