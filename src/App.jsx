import Header from "./components/Header.jsx";
import Home from "./views/Home.jsx";
import "./App.scss";
import "./index.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SingleTodo from "./components/SingleTodo.jsx";
import TodosProvider from "./TodosContext.jsx";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <TodosProvider>
            <Header appName="To-Do List with React" />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/todo/:id" element={<SingleTodo />} />
            </Routes>
          </TodosProvider>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
