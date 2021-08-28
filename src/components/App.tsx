import { Provider } from "react-redux"
import SearchRepositoriesList from "../components/SearchRepositoriesList"
import { store } from "../redux"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search NPM for Repositories</h1>
      <SearchRepositoriesList />
    </Provider>
  );
}

export default App;