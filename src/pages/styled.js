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
const Main = Styled.div`
    background-color:#0e0e0e;
    padding: 0px 30px 20px;
    
    .ant-layout{
        box-shadow: inset 0px 0px 8px 0px #fff;
        border-radius: 20px;
    }
    
    

`;
export {DashboardBaseStyleWrap,Main }