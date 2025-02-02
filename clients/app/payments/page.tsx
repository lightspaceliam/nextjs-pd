/**
 * @description /simple-forms SSR Server Side Rendered Component.
 */
import { Typography, Grid2, Paper, TableCell, TableRow, Button } from "@mui/material";
import Loader from "../ui/Utilities/Loader";
import DefaultTable from "../ui/Tables/DefaultTable";
import IPayment from "../interfaces/IPaymentModels";
import { getAsync } from "../helpers/ApiService";
export default async function Payments() {
  const response = await getAsync<Array<IPayment>>(`${process.env.BASE_API}payments`);

  if(response instanceof Error){
    console.error(`Error: ${response.message}`);
    return <div>Error: {response.message}</div>
  }
  
  return (
    <Paper sx={{ padding: '5px 20px', marginBottom: '15px'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h1" textAlign='center'>Payments</Typography>
        </Grid2>
        <Loader
          loading={false}
          responseMessage={{ severity: 'empty', message: undefined }}
          >
            <DefaultTable 
              tableHeaderChildren={
                <>
                    <TableCell>Cardholder Name</TableCell>
                    <TableCell  align="right">Payment</TableCell>
                    <TableCell align='center'>Options</TableCell>
                </>
              }
              tableBodyChildren={
                <> 
                    {response?.map((p: IPayment) => {
                      
                      const { id, cardHolderName, amount } = p;

                        return <TableRow key={id}>
                            <TableCell>
                                <Typography variant='body2'>{cardHolderName}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant='body2'>${amount}</Typography>
                            </TableCell>
                            <TableCell align='center'>
                                <Button
                                    variant='outlined'
                                    href={`/payments/${id}`}>
                                    View
                                </Button>  
                            </TableCell>
                        </TableRow>
                    })}
                </>
            }
              ariaLabel='Cards'
              handleLoadMore={() => {}}
              previousQueryString={undefined}
              nextQueryString={undefined}
              cols={2}
            />
          </Loader>
      </Grid2>
    </Paper>
  );
}