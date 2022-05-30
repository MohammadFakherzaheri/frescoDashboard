import Styled from 'styled-components';
import { Card } from 'antd';

const BtnWraper = theme => `

`;

const CardFrame = Styled(Card)`
  .ant-card{
    border-radius:10px;
    background: #transparent;
  }
  margin-bottom: 25px !important;
  background: linear-gradient(53deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.008841036414565795) 0%, rgba(0,212,255,1) 158%);
    border: 1px solid;
    border-image: linear-gradient(289deg,rgba(0,212,255,1)100px,rgba(9,9,121,0.008841036414565795) 0%);
    border-radius:10px;
  .ant-card-head{
    border-color: #F1F2F6;
    padding: 0 10px !important;
  }
  .GPAS{
    margin-bottom:0px;
  }
  .ant-card-head .ant-card-head-title {
    padding: 16px 0;
    color:white;
    .totalprojectMenu{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      
      .totalproject-submenu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      } 
    }
    .ant-col.monthlytargetMenu{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      monthlytarget-submenu{
        display:flex;
        flex-direction:row;
       justify-content:center;

      }
    }
  }
  .ant-card-head-title .ant-page-header-heading-title{
    font-weight: 500;
  }
  .ant-card-body{
    padding: ${({ bodypadding }) => (bodypadding ? `${bodypadding} !important` : '10px')};
    color:white;
   .totalproject{
     display:flex;
     flex-direction:row;
    justify-content:space-between;
    align-items:center;
    h2{
      margin-bottom:0px;
      color:white;
    }
  
    
   }
    
    table{
      .ant-tag{
        line-height: 18px;
        border: 0 none;
        text-transform: uppercase;
        font-size: 10px;
        color: #fff;
        &.early{
          background: ${({ theme }) => theme['primary-color']};
        }
        &.late{
          background: ${({ theme }) => theme['warning-color']};
        }
        &.complete{
          background: ${({ theme }) => theme['success-color']};
        }
        &.progress{
          background: ${({ theme }) => theme['danger-color']};
        }
      }
    }
  }
  .ant-card.ant-card-bordered {
      border-radius: 5px;
      overflow: hidden;
      border: none;
  }
  .custom-label {
    font-size: 13px;
    color: #868eae;
    display: inline-flex;
    align-items: center;
  }
  .custom-label:not(:last-child) {
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')} : 20px;
  }

  .custom-label span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')}: 7px;
  }
  

  .ant-card-extra .ant-dropdown-trigger {
    line-height: 0;
    order: 1;
    ${({ theme }) => (!theme.rtl ? ' margin-left' : ' margin-right')}: 20px !important;
  }

  .growth-downward h1 sub,
  .growth-upward h1 sub {
    font-size: 14px;
    font-weight: 600;
    bottom: 0;
    ${({ theme }) => (!theme.rtl ? ' left' : ' right')}: 5px;
  }
 
`;

export { CardFrame };
