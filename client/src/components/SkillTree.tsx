import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Code, Server, Layers, Cpu, Globe, Brain } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  connections: string[];
  description: string;
}

const SkillTree = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrame = useRef<number>();

  const initialNodes: SkillNode[] = useMemo(() => [
    // Programming
    { id: 'c', name: 'C', level: 4, category: 'languages', x: 150, y: 100, icon: <Code className="h-4 w-4" />, connections: ['verilog', 'python'], description: 'Systems programming and embedded development' },
    { id: 'python', name: 'Python', level: 4, category: 'languages', x: 350, y: 100, icon: <Code className="h-4 w-4" />, connections: ['matlab', 'c'], description: 'Scripting and simulation workflows' },

    // HDL
    { id: 'verilog', name: 'Verilog', level: 4, category: 'hdl', x: 100, y: 220, icon: <Cpu className="h-4 w-4" />, connections: ['vhdl', 'fsm', 'modelsim'], description: 'RTL design and digital logic modeling' },
    { id: 'vhdl', name: 'VHDL', level: 3, category: 'hdl', x: 280, y: 220, icon: <Cpu className="h-4 w-4" />, connections: ['verilog', 'fsm'], description: 'Hardware description for digital systems' },
    { id: 'fsm', name: 'FSM Design', level: 4, category: 'hdl', x: 450, y: 220, icon: <Brain className="h-4 w-4" />, connections: ['verilog', 'cmos'], description: 'Mealy/Moore finite state machine design' },

    // VLSI Concepts
    { id: 'cmos', name: 'CMOS Logic', level: 4, category: 'vlsi', x: 150, y: 340, icon: <Brain className="h-4 w-4" />, connections: ['sequential', 'timing'], description: 'CMOS logic design and circuit fundamentals' },
    { id: 'sequential', name: 'Sequential Circuits', level: 4, category: 'vlsi', x: 320, y: 340, icon: <Brain className="h-4 w-4" />, connections: ['combinational'], description: 'Flip-flops, counters, and register design' },
    { id: 'combinational', name: 'Combinational Circuits', level: 3, category: 'vlsi', x: 480, y: 340, icon: <Brain className="h-4 w-4" />, connections: ['sequential'], description: 'Logic gates and multiplexer design' },
    { id: 'timing', name: 'Timing Analysis', level: 3, category: 'vlsi', x: 250, y: 420, icon: <Brain className="h-4 w-4" />, connections: ['lowpower'], description: 'Setup, hold, and propagation delay analysis' },
    { id: 'lowpower', name: 'Low Power Design', level: 3, category: 'vlsi', x: 400, y: 420, icon: <Brain className="h-4 w-4" />, connections: [], description: 'Power-aware digital design techniques' },

    // EDA Tools
    { id: 'matlab', name: 'MATLAB', level: 3, category: 'eda', x: 500, y: 100, icon: <Layers className="h-4 w-4" />, connections: ['python'], description: 'Signal analysis and simulation' },
    { id: 'proteus', name: 'Proteus', level: 4, category: 'eda', x: 100, y: 500, icon: <Layers className="h-4 w-4" />, connections: ['multisim', 'logisim'], description: 'Circuit simulation and PCB design' },
    { id: 'multisim', name: 'Multisim', level: 3, category: 'eda', x: 250, y: 500, icon: <Layers className="h-4 w-4" />, connections: ['proteus'], description: 'Analog and digital circuit simulation' },
    { id: 'logisim', name: 'Logisim', level: 3, category: 'eda', x: 400, y: 500, icon: <Globe className="h-4 w-4" />, connections: ['proteus'], description: 'Digital logic simulation and verification' },
    { id: 'modelsim', name: 'ModelSim', level: 3, category: 'eda', x: 550, y: 280, icon: <Server className="h-4 w-4" />, connections: ['verilog'], description: 'HDL simulation and waveform analysis' },
  ], []);

  const [nodes, setNodes] = useState(initialNodes);

  const categoryColors = {
    languages: '#3B82F6',
    hdl: '#8B5CF6',
    vlsi: '#10B981',
    eda: '#F59E0B',
  };

  const getNodeRadius = useCallback((level: number) => 15 + (level * 3), []);

  const handleNodeClick = useCallback((nodeId: string) => {
    if (!isDragging) {
      setSelectedNode(prev => prev === nodeId ? null : nodeId);
    }
  }, [isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent, nodeId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedNode(nodeId);
    setIsDragging(false);
    
    const node = nodes.find(n => n.id === nodeId);
    if (node && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - node.x,
        y: e.clientY - rect.top - node.y
      });
    }
  }, [nodes]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedNode && svgRef.current) {
        setIsDragging(true);
        
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
        
        animationFrame.current = requestAnimationFrame(() => {
          const rect = svgRef.current!.getBoundingClientRect();
          const newX = e.clientX - rect.left - dragOffset.x;
          const newY = e.clientY - rect.top - dragOffset.y;
          
          const constrainedX = Math.max(30, Math.min(620, newX));
          const constrainedY = Math.max(30, Math.min(520, newY));
          
          setNodes(prevNodes => 
            prevNodes.map(node => 
              node.id === draggedNode 
                ? { ...node, x: constrainedX, y: constrainedY }
                : node
            )
          );
        });
      }
    };

    const handleMouseUp = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      setDraggedNode(null);
      setTimeout(() => setIsDragging(false), 100);
    };

    if (draggedNode) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [draggedNode, dragOffset]);

  const selectedNodeData = useMemo(() => 
    selectedNode ? nodes.find(n => n.id === selectedNode) : null, 
    [selectedNode, nodes]
  );

  const connectionLines = useMemo(() => {
    return nodes.flatMap(node => 
      node.connections.map(connectionId => {
        const connectedNode = nodes.find(n => n.id === connectionId);
        if (!connectedNode) return null;
        
        return (
          <line
            key={`${node.id}-${connectionId}`}
            x1={node.x}
            y1={node.y}
            x2={connectedNode.x}
            y2={connectedNode.y}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeOpacity="0.3"
            className="transition-opacity duration-200"
          />
        );
      }).filter(Boolean)
    );
  }, [nodes]);

  return (
    <div className="w-full bg-card rounded-lg border p-6">
      <div className="relative">
        <svg
          ref={svgRef}
          width="100%"
          height="600"
          viewBox="0 0 650 550"
          className="border rounded-lg bg-gradient-to-br from-background to-muted/20"
        >
          {connectionLines}
          
          {nodes.map(node => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeRadius(node.level)}
                fill={categoryColors[node.category as keyof typeof categoryColors]}
                stroke={selectedNode === node.id ? 'hsl(var(--ring))' : 'transparent'}
                strokeWidth="3"
                className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
                  selectedNode === node.id ? 'drop-shadow-lg' : ''
                } ${draggedNode === node.id ? 'scale-110' : ''}`}
                onClick={() => handleNodeClick(node.id)}
                onMouseDown={(e) => handleMouseDown(e, node.id)}
                opacity={selectedNode && selectedNode !== node.id ? 0.6 : 1}
                style={{ 
                  cursor: draggedNode === node.id ? 'grabbing' : 'grab',
                  willChange: draggedNode === node.id ? 'transform' : 'auto'
                }}
              />
              
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeRadius(node.level) * 0.6}
                fill="rgba(255,255,255,0.9)"
                className="pointer-events-none"
              />
              
              <text
                x={node.x}
                y={node.y + getNodeRadius(node.level) + 15}
                textAnchor="middle"
                className="text-xs font-medium fill-current text-foreground pointer-events-none"
              >
                {node.name}
              </text>
              
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                className="text-xs font-bold fill-current text-foreground pointer-events-none"
              >
                {node.level}
              </text>
            </g>
          ))}
        </svg>
        
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border rounded-lg p-3 space-y-2">
          <div className="text-sm font-semibold">Categories</div>
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
      
      {selectedNodeData && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: categoryColors[selectedNodeData.category as keyof typeof categoryColors],
                color: 'white'
              }}
            >
              {selectedNodeData.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{selectedNodeData.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Level: {selectedNodeData.level}/5</span>
                <span>•</span>
                <span className="capitalize">{selectedNodeData.category}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{selectedNodeData.description}</p>
          
          {selectedNodeData.connections.length > 0 && (
            <div className="mt-3">
              <div className="text-sm font-medium mb-1">Connected Skills:</div>
              <div className="flex flex-wrap gap-1">
                {selectedNodeData.connections.map(connectionId => {
                  const connectedSkill = nodes.find(n => n.id === connectionId);
                  return connectedSkill ? (
                    <span 
                      key={connectionId}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => handleNodeClick(connectionId)}
                    >
                      {connectedSkill.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-4 text-xs text-muted-foreground text-center">
        Click nodes to view details • Drag nodes to rearrange • Numbers indicate skill level (1-5)
      </div>
    </div>
  );
};

export default SkillTree;