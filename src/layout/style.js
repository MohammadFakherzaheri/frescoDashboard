import Styled from 'styled-components';

const Div = Styled.div`
position: relative;
.site-layout-background{
   box-shadow: inset 0px 0px 4px 0px white;
   border-radius:10px;
}
header{
    box-shadow: 0 2px 30px ${({ theme }) => theme['gray-solid']}10;
    z-index: 999;
    input{
        width:calc(100% - 60%);
    }
    .ant-row{
        height:100%;
        width:100%;
        .ant-col{
            height:inherit;
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
        }
    }
 .top-Header-Info{
     display:flex;
     height:inherit;
     flex-direction:row;
     justify-content:center;
     align-items:center;
     column-gap:20px;
     p{
         color:white;
         margin:0;
     }
 }
    .imglogo{
        width : 80px;
        height: 60px;
        img{
            width:100%;
            height:100%;
        }
    }
    svg.updateIcon path{
        stroke: white;
    }
   

    .ant-menu.ant-menu-horizontal{
        display: flex;
        align-items: center;
        margin: 0 -16px;
        li.ant-menu-submenu{
            margin: 0 16px;
        }
        
        .ant-menu-submenu{
            &.ant-menu-submenu-active,
            &.ant-menu-submenu-selected,
            &.ant-menu-submenu-open{
              
            }
            .ant-menu-submenu-title{
                font-size: 14px;
                font-weight: 500;
                color:  '#5A5F7D';
                svg,
                i{
                    color: '#5A5F7D';
                }
                .ant-menu-submenu-arrow{
                    font-family: "FontAwesome";
                    font-style: normal;
                    &:after{
                        content: '\f107';
                        background-color: transparent;
                    }
                }
            }
        }
    }
   

}




/* Sidebar styles */
.ant-layout-sider{
    box-shadow: 0 0 30px #9299B810;
    @media (max-width: 991px){
        box-shadow: 0 0 10px #00000020;
    }
    .ant-layout-sider-children{
        .ant-menu{
            height:100%;
            background:transparent;
            color:white;
                    .ant-menu-item a{
                        color:white;
                  }
        }
    }
    .sidebar-nav-title{
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        display: flex;
        color:#fff;
        
    }
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
        background:#6a6a6a9c !important;
    }
    .ant-menu:not(.ant-menu-horizontal):hover .ant-menu-item-selected{
        background:#6a6a6a9c !important;
    }
    &.ant-layout-sider-collapsed{
        padding: 15px 0px 55px !important;
        .sidebar-nav-title{
            display: none;
        }
     
    }
}

@media only screen and (max-width: 1150px){
  
}

.atbd-main-layout{
    margin-top: 64px;
    transition: 0.3s ease;
    margin-left:230px;
    background-color:#0e0e0e;
    @media only screen and (max-width: 1150px){
        
    }
    
}

/* Mobile Actions */
/*.mobile-action{
    position: absolute;
  
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 767px){
       
    }
    a{
        display: inline-flex;
      
        &.btn-search{
       
        }
        svg{
            width: 20px
            height: 20px;
        }
    }
}*/
.admin-footer{
    @media print {
        display: none;
    }
    .admin-footer__copyright{
        display: inline-block;
        width: 100%;
   
        @media only screen and (max-width: 767px){
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .admin-footer__links{
      
        @media only screen and (max-width: 767px){
            text-align: center;
        }
        a{
           
            &:not(:last-child){
              
            }
            &:hover{
               
            }
        }
    }
}    
`;

export { Div };
