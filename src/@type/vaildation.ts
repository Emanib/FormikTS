
export interface date {
    date: Date;
  }

export interface IAddItems {
    currentlyWork?: boolean,
    jobTitle: string
    jobField: string,
    jobLocation: string,
    companyName: string,
    companyIndustry: string,
    companySize: string
    companySector: string,
    companyAddress: string,
    description: string,
    startDate: Date,
    endDate?: Date,
    reasonOfLeaving?: string,
    numberEmployees:number
}


 