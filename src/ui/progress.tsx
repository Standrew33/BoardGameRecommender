import React from "react";

export function Progress({ value, className }: any) {
  return (
    <div className={className}>
      <div style={{ width: value + '%', backgroundColor: '#4caf50', height: '100%' }} />
    </div>
  );
}
