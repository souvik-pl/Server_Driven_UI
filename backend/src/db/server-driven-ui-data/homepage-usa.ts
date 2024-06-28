import { UISchema } from "../../common/common.type.js";
import { COMPONENT } from "../../common/component.enum.js";

export const HOMEPAGE_DATA_USA: UISchema = {
  id: "c1",
  type: COMPONENT.CONTAINER,
  styles: {
    width: "100%",
  },
  children: [
    {
      id: "s2",
      type: COMPONENT.SECTION,
      styles: {
        marginBottom: "20px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
      },
      children: [
        {
          id: "c3",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i3_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/grocery.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t3_1",
              type: COMPONENT.TEXT,
              content: "Grocery",
              styles: {},
              children: [],
            },
          ],
        },
        {
          id: "c4",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i4_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/electronics.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t4_1",
              type: COMPONENT.TEXT,
              content: "Electronics",
              styles: {},
              children: [],
            },
          ],
        },
        {
          id: "c5",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i5_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/appliances.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t5_1",
              type: COMPONENT.TEXT,
              content: "Appliances",
              styles: {},
              children: [],
            },
          ],
        },
        {
          id: "c6",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i6_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/furniture.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t7_1",
              type: COMPONENT.TEXT,
              content: "Furniture",
              styles: {},
              children: [],
            },
          ],
        },
        {
          id: "c8",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i8_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/travel.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t8_1",
              type: COMPONENT.TEXT,
              content: "Travel",
              styles: {},
              children: [],
            },
          ],
        },
        {
          id: "c9",
          type: COMPONENT.CONTAINER,
          styles: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          },
          children: [
            {
              id: "i9_1",
              type: COMPONENT.IMAGE,
              content: "http://localhost:3000/images/category/toys.png",
              styles: {
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              },
              children: [],
            },
            {
              id: "t9_1",
              type: COMPONENT.TEXT,
              content: "Toys",
              styles: {},
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
