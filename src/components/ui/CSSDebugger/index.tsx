'use client';

import React, { useState, useEffect } from 'react';

interface CSSDebuggerProps {
  showVariables?: boolean;
}

const getCSSVariables = () => {
  if (typeof window === 'undefined') return {};
  
  const computedStyle = getComputedStyle(document.documentElement);
  const variables: Record<string, string> = {};
  
  // Get DaisyUI color variables
  const daisyUIVars = ['--p', '--pc', '--s', '--sc', '--a', '--ac', '--n', '--nc', '--b1', '--b2', '--b3', '--bc'];
  
  daisyUIVars.forEach(varName => {
    const value = computedStyle.getPropertyValue(varName).trim();
    if (value) {
      variables[varName] = value;
    }
  });
  
  return variables;
};

const CSSDebugger: React.FC<CSSDebuggerProps> = ({ showVariables = false }) => {
  const [isVisible, setIsVisible] = useState(showVariables);
  const [cssVars, setCssVars] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isVisible) {
      setCssVars(getCSSVariables());
    }
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-base-300 text-base-content rounded-full shadow-lg text-xs"
        title="Show CSS Variables"
      >
        🎨
      </button>
    );
  }

  return (
    <div className="debug-css-vars">
      <div className="debug-variables">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-bold">CSS Variables</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="px-2 py-1 bg-base-content/20 rounded-btn text-xs text-base-content"
          >
            ✕
          </button>
        </div>
        
        {Object.entries(cssVars).map(([name, value]) => (
          <div key={name} className="flex justify-between mb-1 text-xs">
            <span className="text-base-content/80">{name}:</span>
            <span className="font-mono text-base-content">
              {value}
              <span
                className="inline-block ml-2 w-3 h-3 rounded-sm border border-base-300"
                style={{ backgroundColor: `hsl(${value})` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSDebugger;