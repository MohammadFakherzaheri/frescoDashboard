import Styled from 'styled-components';
import { PageHeader } from 'antd';

const PageHeaderStyle = Styled(PageHeader)`
  color:white;
  .page-header-actions button.ant-btn-white svg {
    width: 12px;
    height: 12px;
    color: #5f63f2;
  }
  span{
    color:white;
  }
  
`;

export { PageHeaderStyle };
