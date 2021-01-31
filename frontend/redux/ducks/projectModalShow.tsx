const HANDLE_PROJECT_MODAL_SHOW = 'handle_project_modal_show';

export const showProjectModal = () => ({
  type: HANDLE_PROJECT_MODAL_SHOW,
});

const initialState = {
  show: false,
};

const showProjectModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_PROJECT_MODAL_SHOW:
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export default showProjectModalReducer;
