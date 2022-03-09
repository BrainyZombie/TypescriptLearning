import { Provider } from "react-redux";
import { store } from "../state";
import RepoList from "./RepoList";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World</h1>
      </div>
    </Provider>
  );
};

export default App;
