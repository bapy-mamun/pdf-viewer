import React from "react";
import { Text } from "@react-three/drei";
import { Node as NodeType } from "../../../types";

interface NodeProps {
  node: NodeType;
  position: [number, number, number];
}

const Node: React.FC<NodeProps> = ({ node, position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={"gray"} />
      <Text
        position={[0, 1, 0]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {node.name}
      </Text>
    </mesh>
  );
};

export default Node;
