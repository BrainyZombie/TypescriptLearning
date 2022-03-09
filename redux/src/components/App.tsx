import { Provider } from "react-redux";
import { store } from "../state";
import RepoList from "./RepoList";
const App = () => {
  return (
    <Provider store={store}>
      <h3> Search for a repository</h3>
      <RepoList />
    </Provider>
  );
};

export default App;
