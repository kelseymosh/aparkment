import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
    padding-bottom: 20% !important;
`;