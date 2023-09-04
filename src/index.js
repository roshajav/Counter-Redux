import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import CounterReducer from "./reducers/CounterReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(CounterReducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
