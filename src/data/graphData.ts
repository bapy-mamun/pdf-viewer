import { GraphData } from "../types";

export const graphData: GraphData = {
  nodes: [
    { id: 1, name: "File1.pdf", path: "/path/to/File1.pdf" },
    { id: 2, name: "File2.pdf", path: "/path/to/File2.pdf" },
    { id: 3, name: "File3.pdf", path: "/path/to/File3.pdf" },
  ],
  edges: [
    { id: 1, source: 1, target: 2, value: "related" },
    { id: 2, source: 2, target: 3, value: "cites" },
  ],
};
