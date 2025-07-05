import React from "react";

export function Button({ children, onClick, variant = 'default' }: any) {
  const base = "px-4 py-2 rounded text-white";
  const styles = {
    default: base + " bg-blue-600 hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-800 px-4 py-2 rounded",
  };
  return <button onClick={onClick} className={styles[variant]}>{children}</button>;
}
