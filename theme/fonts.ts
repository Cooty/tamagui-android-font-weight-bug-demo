import { createFont } from "@tamagui/core";

// const systemFontStack = 'sans-serif'
export const systemFont = createFont({
  family: "",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 26,
    8: 28,
    9: 30,
    10: 32,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 28,
    6: 28,
    7: 32,
    8: 32,
    9: 40,
    10: 40,
  },
  weight: {
    1: "400",
    2: "400",
    3: "600",
    4: "700",
    5: "800",
    6: "800",
    7: "800",
    8: "800",
    9: "800",
    10: "800",
  },
  letterSpacing: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  },
  face: {},
});
