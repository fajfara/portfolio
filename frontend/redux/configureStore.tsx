import { combineReducers, createStore } from 'redux';

import counterReducer from './ducks/counter';
import ProjectModalReducer from './ducks/projectModal';
import showProjectModalReducer from './ducks/projectModalShow';

const reducers = combineReducers({
  counter: counterReducer,
  projectModal: ProjectModalReducer,
  showProjectModal: showProjectModalReducer,
});

const store = createStore(reducers);

export default store;
