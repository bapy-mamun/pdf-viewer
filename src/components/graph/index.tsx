import React, { useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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

  const nodeCount = graphData.nodes.length;
  const angleIncrement = (2 * Math.PI) / nodeCount;
  const radius = 5;

  const getNodePosition = (index: number): [number, number, number] => {
    const angle = index * angleIncrement;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return [x, y, 0];
  };

  const ResponsiveCamera = () => {
    const { camera, size } = useThree();

    useEffect(() => {
      const updateCamera = () => {
        if (size.width < 600) {
          // Adjust based on your breakpoints
          camera.position.set(0, 0, 15); // Adjust the zoom level for smaller screens
        } else {
          camera.position.set(0, 0, 10); // Default zoom level
        }
        camera.updateProjectionMatrix();
      };

      updateCamera();
      window.addEventListener("resize", updateCamera);
      return () => window.removeEventListener("resize", updateCamera);
    }, [camera, size]);

    return null;
  };

  return (
    <Canvas>
      <ResponsiveCamera />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      {graphData.nodes.map((node, index) => (
        <Node key={node.id} node={node} position={getNodePosition(index)} />
      ))}
      {edges.map((edge) => (
        <Edge key={edge.id} edge={edge} onEdit={updateEdgeValue} />
      ))}
    </Canvas>
  );
};

export default Graph;
