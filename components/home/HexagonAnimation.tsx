"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HexagonAnimation() {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 bg-yellow-400 transform rotate-45 hover:rotate-90 transition-transform duration-500">
      </div>
    </div>
  );
} 