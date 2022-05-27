import Styled from "styled-components";
const Main = Styled.div`
background:#0e0e0e;

.ant-col.monthlytarget-submenu{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
   
}

.card_gpa{
    .ant-card{
        margin-bottom:0px !important;
    }
    
}
.ant-card-body{
    .gpas_title{
        display:flex;
        justify-content: center;
        flex-direction:row;
        span{
            font-weight: 600;
    color: #f0f0f0;
    opacity: 0.7;
        }
        h5{
            font-weight:700;
            color:white;
        }
        h4{
            font-weight:800;
            color:white;
        }
      }
}

`
export {Main};