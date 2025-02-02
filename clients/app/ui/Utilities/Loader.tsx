import { FC, ReactNode, JSX } from 'react';

import Progress from './Progress';
import Alert from './Alert';
import { StyledContainer } from './styles/loader';
import IResponseMessage from '../../interfaces/IResponseMessage';
import { Button } from '@mui/material';

interface LoaderProps {
    loading: boolean;
    children: ReactNode;
    responseMessage: IResponseMessage;
    returnPath?: string;
}

const Loader: FC<LoaderProps> = ({
    loading,
    children,
    responseMessage = undefined,
    returnPath = undefined
}): JSX.Element => {

    if(loading === false && responseMessage?.severity === 'error') {
        return (
            <StyledContainer className='loader-error'>
                <Alert
                    alertType={responseMessage.severity}
                    message={responseMessage.message ?? 'Something went wrong'}
                />
                {returnPath !== undefined &&
                  <Button href={returnPath}>Back</Button>
                }
            </StyledContainer>
        );
    }
    return (
        <>
            {loading === true
                ? (
                    <StyledContainer className='loader-success'>
                        <Progress />
                    </StyledContainer>
                ) 
                : children
            }
        </>
    );
};

export default Loader;