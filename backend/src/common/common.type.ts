import { COMPONENT } from "./component.enum.js";
import React from "react";

export type UISchema = {
  id: string;
  type: COMPONENT;
  content?: string;
  styles: React.CSSProperties;
  children: UISchema[];
};

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
};
