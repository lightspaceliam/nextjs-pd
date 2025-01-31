import IPayment from "@/app/interfaces/IPaymentModels";
import { payments } from "../config";

/**
 * @description /simple-forms/{id or slug} SSR Server Side Rendered Component. 
 * @param {Promise<string>} param0 
 * @returns 
 */
export default async function Page({ params }:
    { params: Promise<{slug: string}> }) {

    const { slug } = await params;

    const payment = payments
        .filter((p: IPayment) => (p.id === slug))
        ?.[0];
    
    return <h1>SLUG {slug}, Cardholer name: {payment?.cardHolderName}, Ammount: ${payment?.amount}</h1>
}