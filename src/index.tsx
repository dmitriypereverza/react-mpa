import React, { FC } from "react";
import Loadable from "react-loadable";
import ReactDOM from "react-dom";

const components = [
  {
    tag: "Title",
    component: Loadable({
      loader: () => import("./components/Title"),
      loading: () => <div>Loading...</div>,
    }),
  },
  {
    tag: "Button",
    component: Loadable({
      loader: () => import("./components/Button"),
      loading: () => <div>Loading...</div>,
    }),
  },
];

components.forEach((cmp) => {
  const nodes = document.querySelectorAll(`div[data-cmp='${cmp.tag}']`);
  const Cmp = cmp.component as FC<any>;
  nodes.forEach((node) => {
    // @ts-ignore
    ReactDOM.render(<Cmp {...node.dataset}>{node.innerHTML}</Cmp>, node);
  });
});
