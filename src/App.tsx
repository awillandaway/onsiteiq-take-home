import { useEffect, useState } from 'react';
import {
  getRandomCandidate,
  getSavedCandidates,
  saveCandidate,
  updateCandidateReview,
} from 'services/CandidateService';
import { CandidateInfoCard } from 'components/CandidateInfoCard/CandidateInfoCard';
import type { Candidate } from 'types/Candidate';
import { Button } from 'components/shared/Button/Button';
import {
  AppWrapper,
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
  const [currentCandidateInfo, setCurrentCandidateInfo] = useState<Candidate | null>();

  const [candidateReviews, setCandidateReviews] = useState<Candidate[]>([]);

  const updateSavedCandidatesList = async () => {
    const candidates = await getSavedCandidates();
    setCandidateReviews([...candidates]);
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

  const onApproveCandidate = (candidate: Candidate, notes?: string) => {
    saveCandidate(candidate, 'approved', notes);
    updateSavedCandidatesList();
    setCurrentCandidateInfo(null);
  };

  const onRejectCandidate = (candidate: Candidate, notes?: string) => {
    saveCandidate(candidate, 'rejected', notes);
    updateSavedCandidatesList();
    setCurrentCandidateInfo(null);
  };

  const onClickEditReview = (candidate: Candidate, notes?: string) => {
    updateCandidateReview(candidate, 'not_yet_reviewed', notes);
    updateSavedCandidatesList();
  };

  const onEditModeApprove = (candidate: Candidate, notes?: string) => {
    updateCandidateReview(candidate, 'approved', notes);
    updateSavedCandidatesList();
  };

  const onEditModeReject = (candidate: Candidate, notes?: string) => {
    updateCandidateReview(candidate, 'rejected', notes);
    updateSavedCandidatesList();
  };

  return (
    <AppWrapper>
      <Navbar>
        <h1>OnsiteIQ HR Application</h1>
        <NotificationsSection>
          You have <NotificationNumber>9</NotificationNumber> candidates to review.
          {/* Note: this number is hard-coded to 9 and therefore not accurate; I just thought it would look nice for visual purposes */}
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
            {candidateReviews.map((candidate) => (
              <CandidateInfoCard
                candidate={candidate}
                key={candidate.savedId}
                onApproveCandidate={onEditModeApprove}
                onRejectCandidate={onEditModeReject}
                onClickEditReview={onClickEditReview}
              />
            ))}
            {candidateReviews.length === 0 && (
              <StartNewReview>
                You have no saved reviews. Once you complete a review, it will appear here. To start a review, click the
                Start New Candidate Review button.
              </StartNewReview>
            )}
          </CandidateList>
        </SavedReviewsSection>
      </MainContent>
    </AppWrapper>
  );
};

export default App;
