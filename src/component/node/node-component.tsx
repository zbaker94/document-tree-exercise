import React from 'react';
import {NodeModel} from "../../models";
import "./node-component.scss"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

type StateTypes = {
    open: boolean;
    hidden: boolean;
}

class NodeComponent extends React.Component<NodeModel,StateTypes>{

    constructor(props: NodeModel){
        super(props);
        this.state = {open: false, hidden: !!props.parent};

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen(){
        this.setState({open: !this.state.open});
    }

    render(){
        let childrenList = this.props.children && this.state.open ? this.props.children.map((child: NodeModel) => {
            return <NodeComponent key={child.id} {...child}  children={child.children}/>
        }) : '';
        let additionalNodeClass = this.props.parent ? 'child' : '';
        let additionalCardClass = (this.props.children && this.props.children.length >= 0) ? 'pointer' : '';
        additionalCardClass += ' slid';

        let iconClass = (!this.props.children || this.props.children.length === 0) ? 'hidden' : '';

        return (
            <div className={'node ' + additionalNodeClass}>
                <div onClick={this.toggleOpen} className={'card ' + additionalCardClass}>
                    <div className='title'>
                        {this.props.name}
                    </div>
                    <div className='content'>
                        <img src={this.props.thumbnail.href} alt={this.props.thumbnail.description} />
                        <i className={'expander ' + iconClass}>></i>
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {childrenList}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    get hasChildren(): boolean {
        return this.props.children.length > 0
    }

}export default NodeComponent
