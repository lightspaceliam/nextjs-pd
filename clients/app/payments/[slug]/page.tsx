import IPayment from "@/app/interfaces/IPaymentModels";
import { getAsync } from "@/app/helpers/ApiService";

/**
 * @description /simple-forms/{id or slug} SSR Server Side Rendered Component. 
 * @param {Promise<string>} param0 
 * @returns 
 */
export default async function Payment({ params }: { params: Promise<{slug: string}> }) {

    const { slug: paymentId } = await params;

    const response = await getAsync<IPayment>(`${process.env.BASE_API}payments/${paymentId}`);
    if(response instanceof Error){
        console.error(`Error: ${response.message}`);
        return <div>Error: {response.message}</div>
    }

    return <h1>Slug / PaymentId: {paymentId}, Cardholder name: {response?.cardHolderName}, Amount: ${response?.amount}</h1>
}