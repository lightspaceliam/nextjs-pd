import IBaseModel from "./IBaseModel";

export default interface IPayment extends IBaseModel {
    cardHolderName: string;
    paymentAmount: number;
}