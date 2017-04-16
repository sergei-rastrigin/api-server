import React from 'react';

const pageNotFound = (props) => {
    return (
        <div>
            <div>Page not Found</div>
            {JSON.stringify(props)}
        </div>
    )
};


export default pageNotFound;