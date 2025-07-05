import React from "react";

export function Select({ onValueChange, children }: any) {
  return <div onChange={(e: any) => onValueChange(e.target.value)}>{children}</div>;
}

export function SelectTrigger({ children }: any) {
  return <div>{children}</div>;
}

export function SelectValue({ placeholder }: any) {
  return <select><option disabled selected>{placeholder}</option></select>;
}

export function SelectContent({ children }: any) {
  return <div>{children}</div>;
}

export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>;
}
