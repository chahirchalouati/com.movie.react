import {AnyAction, applyMiddleware, createStore, Store} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {encryptTransform, EncryptTransformConfig} from "redux-persist-transform-encrypt";
import {composeWithDevTools} from "redux-devtools-extension";
import {PersistConfig, Persistor} from "redux-persist/es/types";
import {MovieState} from "../movie/types";
import reducers from "./reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const mw: ThunkMiddleware<ApplicationState, AnyAction> = thunk;
const blacklist: Array<string> = [];
const whitelist: Array<string> = ["MOVIE_REDUCER"];
const config: EncryptTransformConfig = {
    secretKey: process.env.REACT_APP_SECRET_KEY as string,
    onError: (err: Error) => console.log(err),
}
const transforms = [encryptTransform(config)];

export interface ApplicationState {
    movie: MovieState;
}

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage: storage,
    whitelist: whitelist,
    blacklist: blacklist,
    transforms: transforms,
    debug: true,
    serialize: true,
};

const persist = persistReducer(persistConfig, reducers);
const store: Store = createStore(persist, composeWithDevTools(applyMiddleware(mw)));

const persistor: Persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook< RootState> = useSelector
export {persistor, store};