import Styled from "styled-components";

const DashboardBaseStyleWrap = Styled.div`

    h1{
        margin-bottom: 30px;
    }
    .ant-row{
        margin: -5px 0;
    }
    .ant-col{
        margin: 5px 0;
    }
    .ant-progress-success-bg, .ant-progress-bg{
       background-color: ${({percentcolor})=> (percentcolor <= "50" ? 'green' : 'orange')}    
    }
   
`;

export {DashboardBaseStyleWrap }