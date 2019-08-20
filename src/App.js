import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";

import Main from "pages/main";

const App = () => {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
