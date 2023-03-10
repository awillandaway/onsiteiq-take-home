import { Button } from 'components/shared/Button/Button';
import { Card } from 'components/shared/Card/Card';
import { useState } from 'react';
import type { Candidate } from 'types/Candidate';
import { capitalizeFirstLetter } from 'utils/StringUtils';
import {
  StatusWrapper,
  ButtonSection,
  Name,
  NameAndStatus,
  NotesTextArea,
  PhotoAndName,
  SectionHeader,
} from './CandidateInfoCard.styles';
import { CardField } from './CardField/CardField';

interface CandidateInfoCardProps {
  candidate: Candidate;
  onApproveCandidate: (candidate: Candidate, notes?: string) => void;
  onRejectCandidate: (candidate: Candidate, notes?: string) => void;
  onClickEditReview?: (candidate: Candidate, notes?: string) => void;
}

export const getBackgroundColor = (candidate: Candidate) => {
  switch (candidate.status) {
    case 'approved':
      return '#0c1a0c';
    case 'rejected':
      return '#2a0606';
    case 'not_yet_reviewed':
    default:
      return undefined;
  }
};

export const CandidateInfoCard = ({
  candidate,
  onApproveCandidate,
  onRejectCandidate,
  onClickEditReview = () => {},
}: CandidateInfoCardProps) => {
  const [notes, setNotes] = useState(candidate.notes);

  const formatCandidateName = () => {
    const { title, first, last } = candidate.name;
    return `${title} ${first} ${last}`; // should we show title?
  };

  const formatStreet = () => {
    const { number, name } = candidate.location.street;
    return `${number} ${name}`;
  };

  const formatCityState = () => {
    const { city, state, postcode } = candidate.location;
    return `${city}, ${state} ${postcode}`;
  };

  const registeredDate = new Date(candidate.registered.date);

  return (
    <div data-testid="candidate-info-card">
      <Card backgroundColor={getBackgroundColor(candidate)}>
        <PhotoAndName>
          <img src={candidate.picture.large} alt="candidate" />

          <NameAndStatus>
            <Name>{formatCandidateName()}</Name>
            {candidate.status !== 'not_yet_reviewed' && (
              <StatusWrapper>Status: {capitalizeFirstLetter(candidate.status)}</StatusWrapper>
            )}
          </NameAndStatus>
        </PhotoAndName>

        <SectionHeader>Basic Info</SectionHeader>
        <CardField label="Registered">{registeredDate.toLocaleDateString()}</CardField>
        <CardField label="Gender">{capitalizeFirstLetter(candidate.gender)}</CardField>
        <CardField label="Age">{candidate.dob.age}</CardField>

        <SectionHeader>Contact Info</SectionHeader>
        <CardField label="Email">{candidate.email}</CardField>
        <CardField label="Address">
          <div>
            <div>{formatStreet()}</div>
            <div>{formatCityState()}</div>
            <div>{candidate.location.country}</div>
          </div>
        </CardField>

        <CardField label="Phone">Phone: {candidate.phone}</CardField>
        <CardField label="Cell">Cell: {candidate.cell}</CardField>

        <SectionHeader>Notes</SectionHeader>
        <NotesTextArea
          autoFocus
          aria-label="notes-input"
          placeholder="Notes about the candidate"
          defaultValue={candidate.notes}
          disabled={candidate.status !== 'not_yet_reviewed'}
          onChange={(event) => setNotes(event.target.value)}
        />
        <ButtonSection>
          {candidate.status === 'not_yet_reviewed' ? (
            <>
              <Button text="Approve" variant="primary" onClick={() => onApproveCandidate(candidate, notes)} />
              <Button text="Reject" variant="danger" onClick={() => onRejectCandidate(candidate, notes)} />
            </>
          ) : (
            <Button text="Edit Review" onClick={() => onClickEditReview(candidate, notes)} />
          )}
        </ButtonSection>
      </Card>
    </div>
  );
};
