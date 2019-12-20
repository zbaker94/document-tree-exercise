export interface NodeTree {
    nodes: Array<Node>
}

export interface Node {
    thumbnail: Thumbnail
    id: number;
    parent: number;
    name: string;
}

export interface Thumbnail {
    href: string;
    description: string;
}
