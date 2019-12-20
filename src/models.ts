export class NodeTreeModel{
    nodes: Array<NodeModel> = [];

    constructor(tree: Array<Object>){
        tree.map((item) => this.nodes.push(item as NodeModel))
    }
}

export class NodeModel {
    thumbnail!: ThumbnailModel;
    id!: number;
    parent!: number;
    name!: string;
}

export class ThumbnailModel{
    href!: string;
    description!: string;
}
