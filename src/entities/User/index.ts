export {
    userReducerName,
    userReducer,
    userActions
} from "./model/slices/UserSlice";

export type {
    IUserSchema
} from './model/types/user';

export {
    getAuthData
} from './model/selectors/UserSelectors';