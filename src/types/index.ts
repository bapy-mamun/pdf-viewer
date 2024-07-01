export interface Node {
  id: number;
  name: string;
  path: string;
}

export interface Edge {
  id: number;
  source: number;
  target: number;
  value: string;
}

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}
