import { SET_GRIDVIEW, SET_LISTVIEW } from "../action";

const filter_reducer = (state, action) => {
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  throw new Error(`Invalid action ${action.type}`);
};

export default filter_reducer;
