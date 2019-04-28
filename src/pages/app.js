import styled from 'styled-components';

export const AppWrapper = styled.div`
    display: grid;

grid-template-areas:
  "navbar navbar navbar"
  "leftsidebar main rightsidebar"
  "footer footer footer";

grid-template-columns: 1fr 6fr 1fr;
grid-template-rows: 1fr 4fr 1fr;
grid-gap: 10px;

height: 100vh;
`;