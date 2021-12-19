import { Constants } from "../Redux/List/constant";


export interface FormValues {
    jobTitle: string,
    jobField: string,
    jobLocation: string,
    startDate: string,
    endDate: string,
    description: string,
    companyName: string,
    companyAddress: string,
    currentlyWork: boolean,
    companyIndustry: string,
    companySize: string,
    companySector: string,
    reasonOfLeaving: string,
    numberEmployees: string,
    id: string,
}


export interface IState {
    ListById: FormValues[],
    list: FormValues[],
    error: string,
   isUpdating: boolean,
}

export interface AddItemAction {
    type:Constants.ADD_ITEM;
    payload: FormValues;
}

export interface DeleteItemAction {
    type:Constants.DELETE_ITEM;
    payload: string;
}

export interface GetItemAction {
    type: Constants.GET_ITEM;
    payload: string;
}

export interface EditItemAction {
    type: Constants.EDIT_ITEM;
    payload: FormValues;
}

export type ActionsType =
    | AddItemAction
    | DeleteItemAction
    | GetItemAction
    | EditItemAction


export type AllListActions = ActionsType;