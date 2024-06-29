import { COMPONENT } from "./component.enum.js";
import React from "react";

export type UISchema = {
  id: string;
  type: COMPONENT;
  content?: string;
  styles: React.CSSProperties;
  children: UISchema[];
};

export type BodyProps = {
  response: {
    read: () => any;
  };
};

export type SDUIRendererProps = {
  data: UISchema;
};

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
};

export type ProductProps = {
  data: Product;
};
