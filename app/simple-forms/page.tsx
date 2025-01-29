import { Typography, Grid2, Paper, TableCell, TableRow, Button } from "@mui/material";
import { payments } from "./config";
import Loader from "../ui/Utilities/Loader";
import DefaultTable from "../ui/Tables/DefaultTable";
import IPayment from "../interfaces/IPaymentModels";

export default function SimpleForms() {
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
                      <TableCell align='center'>Options</TableCell>
                  </>
                }
                tableBodyChildren={
                  <> 
                      {payments?.map((p: IPayment) => {
                        
                        const { id, cardHolderName } = p;

                          return <TableRow key={id}>
                              <TableCell>
                                  <Typography variant='body2'>{cardHolderName}</Typography>
                              </TableCell>
                              <TableCell align='center'>
                                  <Button
                                      variant='outlined'
                                      href={`/payment/${id}`}>
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