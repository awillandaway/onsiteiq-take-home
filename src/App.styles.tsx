import { CardWrapper } from 'components/shared/Card/Card.styles';
import { onsiteIqPurple } from 'constants/colors';
import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #111111;
  padding: 8px 16px;
  border-bottom: 2px solid ${onsiteIqPurple};
  display: flex;
  align-items: center;
`;

export const NotificationsSection = styled.div`
  margin-left: auto;
`;

export const NotificationNumber = styled.span`
  color: ${onsiteIqPurple};
  font-weight: 500;
  border: 1px solid ${onsiteIqPurple};
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
  display: flex;
`;

export const CandidateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${CardWrapper} {
    margin: 0 8px 8px 0;
  }
`;

export const StartNewReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 64px;
  border: 2px solid ${onsiteIqPurple};
  padding: 16px;
  background: #111111;
`;

export const NewReviewSection = styled.div`
  width: 700px;
  flex: 1 0 auto;
`;

export const SavedReviewsSection = styled.div`
  border-left: 1px solid grey;
  padding-left: 64px;
  max-height: calc(100vh - 29px - 16px - 2px - 32px);
  overflow-y: auto;
`;
