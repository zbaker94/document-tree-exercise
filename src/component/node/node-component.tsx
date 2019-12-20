import React from 'react';
import {NodeModel} from "../../models";
import "./node-component.scss"

const NodeComponent = (props: NodeModel) => {
    return (
        <div className='card'>
            <div className='title'>
                Title
            </div>
            <div className='content'>
                Some Content
            </div>
        </div>
    );
};

export default NodeComponent;
