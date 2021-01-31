const CHANGE_PROJECT_DATA = 'change_project_data';

export const changeProjectData = data => ({
  type: CHANGE_PROJECT_DATA,
  payload: data,
});

const initialState = {
  title: '',
};

const ProjectModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROJECT_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ProjectModalReducer;
