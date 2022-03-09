import { ActionType } from "../action-types";
import { Action } from "../actions";
interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepoState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepoState = initialState,
  action: Action
): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { data: [], loading: true, error: null };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case ActionType.SEARCH_REPO_ERROR:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
