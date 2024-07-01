import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Node from "../node";
import Edge from "../edge";
import { graphData } from "../../data/graphData";
import { Edge as EdgeType } from "../../types";

const Graph: React.FC = () => {
  const [edges, setEdges] = useState<EdgeType[]>(graphData.edges);

  const updateEdgeValue = (id: number, newValue: string) => {
    setEdges(
      edges.map((edge) =>
        edge.id === id ? { ...edge, value: newValue } : edge
      )
    );
  };

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      {graphData.nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
      {edges.map((edge) => (
        <Edge key={edge.id} edge={edge} onEdit={updateEdgeValue} />
      ))}
    </Canvas>
  );
};

export default Graph;
