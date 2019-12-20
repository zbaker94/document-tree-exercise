import React from 'react';

const Node = (props: any) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
};

export default Node;
