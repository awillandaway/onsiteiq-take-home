import { useModal } from 'hooks/useModal';
import { useEffect, useState } from 'react';
import type { ExtendedCandidate } from 'services/CandidateService';
import { getRandomCandidate, getSavedCandidates, saveCandidate } from 'services/CandidateService';
import { CandidateInfoCard } from 'components/CandidateInfoCard/CandidateInfoCard';
import type { Candidate } from 'types/Candidate';
import { Button } from 'components/shared/Button/Button';
import {
  CandidateList,
  MainContent,
  Navbar,
  NewReviewSection,
  NotificationNumber,
  NotificationsSection,
  SavedReviewsSection,
  StartNewReview,
} from './App.styles';
import './App.css';

const App = () => {
  // const { isOpen, toggleModal } = useModal();
  const [currentCandidateInfo, setCurrentCandidateInfo] = useState<Candidate | null>();

  const [savedCandidates, setSavedCandidates] = useState<ExtendedCandidate[]>([]);

  const updateSavedCandidatesList = async () => {
    const candidates = await getSavedCandidates();
    setSavedCandidates([...candidates]);
  };

  useEffect(() => {
    updateSavedCandidatesList();
  }, []);

  const onClickGetCandidate = () => {
    getRandomCandidate().then((candidate) => {
      if (candidate) {
        setCurrentCandidateInfo({ ...candidate, status: 'not_yet_reviewed' });
      }
    });
  };

  const onApproveCandidate = (candidate: Candidate) => {
    saveCandidate(candidate, 'approved');
    updateSavedCandidatesList();
    setCurrentCandidateInfo(null);
  };

  const onRejectCandidate = (candidate: Candidate) => {
    saveCandidate(candidate, 'rejected');
    updateSavedCandidatesList();
    setCurrentCandidateInfo(null);
  };

  return (
    <div>
      <Navbar>
        <h1>OnsiteIQ HR Application</h1>
        <NotificationsSection>
          You have <NotificationNumber>{Math.floor(Math.random() * 8) + 2}</NotificationNumber> candidates to review.
        </NotificationsSection>
      </Navbar>

      <MainContent>
        <NewReviewSection>
          <h2>New Review</h2>
          {!currentCandidateInfo && (
            <StartNewReview>
              Please click the Start New Candidate Review button to start a review.
              <Button onClick={onClickGetCandidate} text="Start New Candidate Review" />
            </StartNewReview>
          )}

          {currentCandidateInfo && (
            <CandidateInfoCard
              candidate={currentCandidateInfo}
              onApproveCandidate={onApproveCandidate}
              onRejectCandidate={onRejectCandidate}
            />
          )}
        </NewReviewSection>
        <SavedReviewsSection>
          <h2>Saved Reviews</h2>
          <CandidateList>
            {savedCandidates.map((candidate) => (
              <CandidateInfoCard
                candidate={candidate}
                onApproveCandidate={onApproveCandidate}
                onRejectCandidate={onRejectCandidate}
              />
            ))}
          </CandidateList>
        </SavedReviewsSection>
      </MainContent>
    </div>
  );
};

export default App;
