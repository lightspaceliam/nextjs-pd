import IPayment from "@/app/interfaces/IPaymentModels";
import { getAsync } from "@/app/helpers/ApiService";

/**
 * @description /simple-forms/{id or slug} SSR Server Side Rendered Component. 
 * @param {Promise<string>} param0 
 * @returns 
 */
export default async function Page({ params }: { params: Promise<{slug: string}> }) {

    const { slug } = await params;

    const response = await getAsync<IPayment>(`${process.env.BASE_API}payments/${slug}`);
    if(response instanceof Error){
        console.error(`Error: ${response.message}`);
        return <div>Error: {response.message}</div>
    }

    return <h1>SLUG {slug}, Cardholer name: {response?.cardHolderName}, Ammount: ${response?.amount}</h1>
}