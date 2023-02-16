import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #111111;
  padding: 8px 16px;
  border-bottom: 2px solid #680adc;
  display: flex;
  align-items: center;
`;

export const NotificationsSection = styled.div`
  margin-left: auto;
`;

export const NotificationNumber = styled.span`
  color: #680adc;
  font-weight: 500;
  border: 1px solid #673ab7;
  width: 19px;
  height: 19px;
  display: inline-flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const MainContent = styled.div`
  padding: 16px;
`;
