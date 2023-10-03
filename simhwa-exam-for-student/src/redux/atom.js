import { atom } from "recoil";

export const toDo = atom({
  key: "todos",
  default: [],
});
