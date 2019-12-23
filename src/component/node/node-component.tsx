import React from 'react';
import {NodeModel} from "../../models";
import "./node-component.scss"

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
        let iconClass = (!this.props.children || this.props.children.length === 0) ? 'hidden' : '';
        iconClass += this.state.open ? ' rot-90-cw' : '';

        return (
            <div className={'node ' + additionalNodeClass}>
                <div onClick={this.toggleOpen} className={'card ' + additionalCardClass}>
                    <div className='content inline'>
                        <img src={this.props.thumbnail.href} alt={this.props.thumbnail.description} />
                    </div>
                    <div className='title inline vertical-center'>
                        {this.props.name}
                    </div>
                    <img className={'expander vertical-center ' + iconClass} src="https://img.icons8.com/windows/32/000000/play.png" alt='arrow icon indicating open or not' />
                </div>
                {childrenList}
            </div>
        )
    }

    get hasChildren(): boolean {
        return this.props.children.length > 0
    }

}export default NodeComponent
