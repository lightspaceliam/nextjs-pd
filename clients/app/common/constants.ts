import IResponseMessage from "../interfaces/IResponseMessage";

export const emptyResponseMessage: IResponseMessage = { severity: 'empty', message: undefined };
export const somethingWentWrongResponseMessage: IResponseMessage = { severity: 'error', message: 'Something went wrong' };