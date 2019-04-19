import { CHANGE_PROJECTS_GRID, OPEN_PROJECTS_DROPDOWN } from '../Actions/_constants/constants';

const initialState = {
  projectsDropdownOpen: false,
  projectsGrid: 'Designer',
};

interface ReducerState {
  projectsDropdownOpen: boolean;
  projectsGrid: string;
}

interface ReducerAction {
  type: string;
  payload: any;
}

function Reducer(state: ReducerState = initialState, action: ReducerAction) {

  switch (action.type) {
    case OPEN_PROJECTS_DROPDOWN:
      return Object.assign({}, state, { projectsDropdownOpen: action.payload });
    case CHANGE_PROJECTS_GRID:
      return Object.assign({}, state, { projectsGrid: action.payload });
    default:
      return state;
  }
}

export default Reducer;
