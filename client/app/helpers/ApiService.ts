/**
 * @description Convenience method implementing 
 * @param {string} url Absolute url: https://...
 * @returns 
 */
export const getAsync = async <T>(url: string): Promise<T | Error> => {

    try{
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        });
    
        if(response.ok){
            return await response.json() as T;
        }

        return new Error(`${response.status}, something went wrong`);
        
    } catch(error: unknown){
        return handleHttpResponseError(error);
    }
}

const handleHttpResponseError = (error: unknown): Error => {
    if(error === null || error === undefined){
        return new Error('Something went wrong');
    }

    return new Error(error.toString());
}