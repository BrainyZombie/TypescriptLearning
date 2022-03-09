import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repos);

  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepos(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      {!error &&
        !loading &&
        data.map((repo: any, i: number) => (
          <div key={i}>
            {repo}
            <br />
          </div>
        ))}
    </div>
  );
};

export default RepoList;
