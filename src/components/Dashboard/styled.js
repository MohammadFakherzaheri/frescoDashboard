import Styled from "styled-components";
const Main = Styled.div`
background:#ececec;

.ant-col.monthlytarget-submenu{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    &.border_right {
        border-right: 3px solid #ececec;
    
    }
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
            font-weight:700;
            color:#0000009e;
        }
        h5{
            font-weight:700;
        }
        h4{
            font-weight:800;
        }
      }
}

`
export {Main};