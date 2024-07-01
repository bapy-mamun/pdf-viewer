import React, { useState } from "react";
import { Line, Html } from "@react-three/drei";
import EditableEdge from "../editable-edge";
import { Edge as EdgeType } from "../../types";
import { graphData } from "../../data/graphData";

interface EdgeProps {
  edge: EdgeType;
  onEdit: (id: number, newValue: string) => void;
}

const Edge: React.FC<EdgeProps> = ({ edge, onEdit }) => {
  const [isEditing, setEditing] = useState(false);

  const handleClick = () => {
    setEditing(true);
  };

  const handleSave = (newValue: string) => {
    setEditing(false);
    onEdit(edge.id, newValue);
  };

  const getNodePosition = (id: number): [number, number, number] => {
    const node = graphData.nodes.find((node) => node.id === id);
    if (node) {
      const index = graphData.nodes.indexOf(node);
      const nodeCount = graphData.nodes.length;
      const angleIncrement = (2 * Math.PI) / nodeCount;
      const angle = index * angleIncrement;
      const radius = 5;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return [x, y, 0];
    }
    return [0, 0, 0];
  };

  const sourcePosition = getNodePosition(edge.source);
  const targetPosition = getNodePosition(edge.target);

  return (
    <>
      <Line
        points={[sourcePosition, targetPosition]}
        color="blue"
        lineWidth={1}
        onClick={handleClick}
      />
      <Html
        position={[
          (sourcePosition[0] + targetPosition[0]) / 2,
          (sourcePosition[1] + targetPosition[1]) / 2,
          0,
        ]}
      >
        {isEditing ? (
          <EditableEdge value={edge.value} onSave={handleSave} />
        ) : (
          <div
            onClick={handleClick}
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              padding: "2px",
              borderRadius: "3px",
            }}
          >
            {edge.value}
          </div>
        )}
      </Html>
    </>
  );
};

export default Edge;
