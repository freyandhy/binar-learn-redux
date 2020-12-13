import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Store
const globalStore = createStore(rootReducer);

export default globalStore;
