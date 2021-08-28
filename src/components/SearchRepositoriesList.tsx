import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useTypedSelector';

const SearchRepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { data, loading, error } = useAppSelector((state) => state.repositories);
  const { searchRepositories } = useActions();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <ul>{!loading && data.map((name) => <li key={name}>{name}</li>)}</ul>
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default SearchRepositoriesList;