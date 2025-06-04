export interface Position {
  x: number;
  y: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export interface InteractiveBackgroundProps {
  particleCount?: number;
  maxDistance?: number;
  mouseRadius?: number;
}
