import React from "react";
import "./App.css";
import Counter from "./components/contents/counter";
import { BrowserRouter } from "react-router-dom";
import { RoutesManagement } from "./routes";
// import Todo from "./components/todo/todo";
// import TodoTable from "./components/todoTable/todoTable";

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <RoutesManagement />
        </BrowserRouter>
        {/* <Counter /> */}
        {/* <Todo />
      <TodoTable /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
