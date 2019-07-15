import React from "react";
import "@material/button/dist/mdc.button.min.css";
import "@material/textfield/dist/mdc.textfield.min.css";
import "@material/select/dist/mdc.select.min.css";
import "@material/icon-button/dist/mdc.icon-button.min.css";
import "@material/tab-bar/dist/mdc.tab-bar.min.css";
import "@material/tab/dist/mdc.tab.min.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.min.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.min.css";

import Forms from "./components/Forms";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Forms />
    </div>
  );
}

export default App;
