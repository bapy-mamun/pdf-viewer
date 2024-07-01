import React, { useState } from 'react';
import { Line, Html } from '@react-three/drei';
import EditableEdge from '../editable-edge';
import { Edge as EdgeType } from '../../types';

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

  return (
    <>
      <Line
        points={[[edge.source * 2, 0, 0], [edge.target * 2, 0, 0]]}
        color="blue"
        lineWidth={1}
        onClick={handleClick}
      />
      <Html position={[(edge.source + edge.target) / 2 * 2, 0, 0]}>
        {isEditing ? (
          <EditableEdge value={edge.value} onSave={handleSave} />
        ) : (
          <div onClick={handleClick} style={{ cursor: 'pointer', backgroundColor: 'white', padding: '2px', borderRadius: '3px' }}>
            {edge.value}
          </div>
        )}
      </Html>
    </>
  );
};

export default Edge;
