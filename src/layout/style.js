import Styled from 'styled-components';

const Div = Styled.div`
flex:1;
flex-direction:column;
dispaly:flex;
background:#0e0e0e;

.logo{
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height:60px;
    width:100%;
    .img{
        height:60px;
        widht:60px;
        img{
            widht:100%;
            height:100%;
        }
    }
    border-bottom: 2px solid rgba(176,176,176,0.37);
}
.menuSidbar {
    
    padding: 15px;
    height: 100vh;
    background:transparent;

    .ant-menu-root.ant-menu-vertical{
        background:transparent;
        color:white;
        height:100%;
        }
        .ant-menu-submenu-title{
            display:flex;
            align-items:center;
        }
        .ant-menu-vertical{
            border:unset;
        }
        .ant-menu-item a{
            color:white;
        }
    }

`;
const TopMenuBarDesin = Styled.div`
    background: #0e0e0e;
    color:white;
    border-bottom: 2px solid rgba(176,176,176,0.37);
    height:60px;
    .ant-row{
        height:100%;
        .Searchbar{
            display:flex;
            justify-content:center;
            align-items:center;
            height:100%;
            .ant-space-vertical{
                width:60%;
                button{
                    border:unset;
                }
            }
        }
        .topMenu{

            height: 100%;
            justify-content: center;
            align-items: center;
            display:flex;
            column-gap:20px;
            .Notifications{
                .ant-avatar{
                    height: 30px;
                    width: 30px;

                }
            }
            .Profile{
                .ant-avatar-image{
                    background:#ccc;
                }
            }
        }
    }
`;

const Footer = Styled.div`
    height:60px;
    color:white;
    .ant-row{
        height:100%;
        span{
            height:100%;
            display:flex ;
            align-items:center;
            margin-left:30px;
        }
    }
`;
export { Div,TopMenuBarDesin,Footer };
