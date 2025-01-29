import { FC, ReactNode, JSX } from 'react';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import { StyledTable, StyledTableHeaderRow, StyledTableBody, StyledDiv } from './styles/defaultTable';
import { Button, TableCell, TableRow } from '@mui/material';

interface DefaultTableProps {
    tableHeaderChildren: ReactNode;
    tableBodyChildren: ReactNode;
    ariaLabel: string;
    handleLoadMore: (uri?: string) => void;
    previousQueryString?: string;
    nextQueryString?: string;
    isSticky?: boolean;
    cols?: number;
    showPaginationControls?: boolean;
}

const DefaultTable: FC<DefaultTableProps> = ({
    tableHeaderChildren,
    tableBodyChildren,
    ariaLabel,
    handleLoadMore,
    nextQueryString = undefined,
    previousQueryString = undefined,
    isSticky = true,
    cols = 0,
    showPaginationControls = false
}): JSX.Element => {
    return (
        <StyledTable stickyHeader={isSticky} aria-label={ariaLabel}>
            <TableHead>
                <StyledTableHeaderRow>
                    {tableHeaderChildren}
                </StyledTableHeaderRow>
            </TableHead>
            <StyledTableBody>
                {tableBodyChildren}
            </StyledTableBody>
            {showPaginationControls &&
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={cols}>
                    <StyledDiv>
                      <Button
                        onClick={() => previousQueryString === undefined ? {} : handleLoadMore(previousQueryString)}
                        variant='outlined'
                        disabled={previousQueryString === undefined}>
                        Previous
                      </Button>
                  
                      <Button
                        onClick={() => nextQueryString === undefined ? {} : handleLoadMore(nextQueryString)}
                        variant='outlined'
                        disabled={nextQueryString === undefined}>
                        Next
                      </Button>
                    </StyledDiv>
                  </TableCell>
                </TableRow>
              </TableFooter>
            }
        </StyledTable>
    );
};

export default DefaultTable;