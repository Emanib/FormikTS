import { Constants } from "./constant";
import {
  ActionsType,
  FormValues,
} from "../../@type/type";


export const addItem = (payload: FormValues): ActionsType => {
  return {
    type: Constants.ADD_ITEM,
    payload,
  };
};

export const deleteItem = (payload: string): ActionsType => {
  return {
    type: Constants.DELETE_ITEM,
    payload,
  };
};

export const GetItem = (payload: string): ActionsType => {
  return {
    type: Constants.GET_ITEM,
    payload,
  };
};

export const EditItem = (payload: FormValues): ActionsType => {
  return {
    type: Constants.EDIT_ITEM,
    payload,
  };
};