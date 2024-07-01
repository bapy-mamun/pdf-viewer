import React from "react";
import { Text } from "@react-three/drei";
import { Node as NodeType } from "../../types";

interface NodeProps {
  node: NodeType;
}

const Node: React.FC<NodeProps> = ({ node }) => {
  return (
    <mesh position={[node.id * 2, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={"orange"} />
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
