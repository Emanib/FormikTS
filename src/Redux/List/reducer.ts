
import {
  ActionsType,
  IState,
} from "../../@type/type";
import { Constants } from "./constant";
export const listReducer =
  (
    initialState: IState = {
      ListById: [],
      list: [],
      error: "",
      isUpdating: false,
    },
    action: ActionsType
  ): IState => {
    switch (action.type) {
      case Constants.ADD_ITEM:
        return {
          ...initialState,
          isUpdating: false,
          ListById: [],
          list: [action.payload, ...initialState.list],
        };

      case Constants.DELETE_ITEM:
        return {
          ...initialState,
          isUpdating: false,
          ListById: [],
          list: initialState.list.filter(
            (item) => item.id !== action.payload
          ),
        };
      case Constants.GET_ITEM:
        return {
          ...initialState,
          isUpdating: true,
          ListById: initialState.list.filter(
            (item) => item.id === action.payload
          ),
        };
      case Constants.EDIT_ITEM:

        let update = initialState.list.filter(
          (item) => item.id !== action.payload.id
        )

        return {
          ...initialState,
           isUpdating: !initialState.isUpdating,
          list: update.concat(action.payload),
        }

      default:
        return initialState;
    }
  };
