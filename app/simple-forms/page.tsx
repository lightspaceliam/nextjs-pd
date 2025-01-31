//'use client';

import { Typography, Grid2, Paper, TableCell, TableRow, Button } from "@mui/material";
// import { useRouter } from 'next/navigation';
import { payments } from "./config";
import Loader from "../ui/Utilities/Loader";
import DefaultTable from "../ui/Tables/DefaultTable";
import IPayment from "../interfaces/IPaymentModels";
import { getAsync } from "../helpers/ApiService";
// import IResponseMessage from '../interfaces/IResponseMessage';
// import { emptyResponseMessage } from '../common/constants';
// working out routing with params https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
export default async function SimpleForms() {
  // const response = await getAsync<Array<IPayment>>(`${process.env.BASE_API}payments`);
  // const [responseMessage, setResponseMessage] = useState<IResponseMessage>(emptyResponseMessage);


  // useEffect(() => {}, []);
  // if(response instanceof Error){
  //   //setResponseMessage({ severity: 'error', message: response?.message })
  //   console.error(`Error: ${response.message}`);
  // }
  //const router = useRouter();
  //const { query: { id }} = router;
  // console.log(router);
  return (
    <Paper sx={{ padding: '5px 20px', marginBottom: '15px'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Typography variant="h1" textAlign='center'>Simple Forms</Typography>
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
                    {payments?.map((p: IPayment) => {
                      
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
                                    href={`/simple-forms/${id}`}>
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