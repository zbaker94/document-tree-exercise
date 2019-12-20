import React from "react";

const NodeTree = (props: any) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
};

export default NodeTree;
