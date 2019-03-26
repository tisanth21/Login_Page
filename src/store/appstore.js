import { createStore, applyMiddleware } from "redux";
import rootreducer from "../reducer/rootreducer";
import thunk from "redux-thunk";

export default function configureStore() {
  return createStore(rootreducer, applyMiddleware(thunk));
}
