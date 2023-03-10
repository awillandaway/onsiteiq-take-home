import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import type { Candidate } from 'types/Candidate';
import { CandidateInfoCard, getBackgroundColor } from '../CandidateInfoCard';
import { mockApprovedCandidate, mockCandidate, mockRejectedCandidate } from '../../../../jest/testData';

const mockOnApproveCandidate = jest.fn();
const mockOnRejectCandidate = jest.fn();
const mockOnClickEditReview = jest.fn();

const renderCandidateInfoCard = (candidate: Candidate = mockCandidate) =>
  render(
    <CandidateInfoCard
      candidate={candidate}
      onApproveCandidate={mockOnApproveCandidate}
      onRejectCandidate={mockOnRejectCandidate}
      onClickEditReview={mockOnClickEditReview}
    />,
  );

describe('CandidateInfoCard', () => {
  it('Renders correctly', () => {
    const card = renderer
      .create(
        <CandidateInfoCard
          candidate={mockCandidate}
          onApproveCandidate={mockOnApproveCandidate}
          onRejectCandidate={mockOnRejectCandidate}
        />,
      )
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it('Correctly gets background color', () => {
    expect(getBackgroundColor(mockCandidate)).toBe(undefined);
    expect(getBackgroundColor(mockApprovedCandidate)).toBe('#0c1a0c');
    expect(getBackgroundColor(mockRejectedCandidate)).toBe('#2a0606');
  });

  it('Does not renders candidate status when candidate is not yet reviewed', () => {
    const { queryByText } = renderCandidateInfoCard();

    expect(queryByText((text) => text.includes('Status'))).toBeNull();
  });

  it('Renders candidate status when candidate is approved', () => {
    const { getByText, queryByText } = renderCandidateInfoCard(mockApprovedCandidate);

    expect(getByText('Status: Approved')).toBeVisible();
    expect(queryByText('Status: Rejected')).toBeNull();
  });

  it('Renders candidate status when candidate is rejected', () => {
    const { getByText, queryByText } = renderCandidateInfoCard(mockRejectedCandidate);

    expect(getByText('Status: Rejected')).toBeVisible();
    expect(queryByText('Status: Approved')).toBeNull();
  });

  it('Renders approve and reject buttons when candidate is not yet reviewed', () => {
    const { getByRole } = renderCandidateInfoCard();

    expect(getByRole('button', { name: 'Approve' })).toBeVisible();
    expect(getByRole('button', { name: 'Reject' })).toBeVisible();
  });

  it('Renders edit review button when candidate is approved and disables notes textbox', () => {
    const { getByRole, queryByRole } = renderCandidateInfoCard(mockApprovedCandidate);

    expect(getByRole('textbox')).toBeDisabled();

    expect(getByRole('button', { name: 'Edit Review' })).toBeVisible();
    expect(queryByRole('button', { name: 'Approve' })).toBeNull();
    expect(queryByRole('button', { name: 'Reject' })).toBeNull();
  });

  it('Renders edit review button when candidate is rejected and disables notes textbox', () => {
    const { getByRole, queryByRole } = renderCandidateInfoCard(mockRejectedCandidate);

    expect(getByRole('textbox')).toBeDisabled();

    expect(getByRole('button', { name: 'Edit Review' })).toBeVisible();
    expect(queryByRole('button', { name: 'Approve' })).toBeNull();
    expect(queryByRole('button', { name: 'Reject' })).toBeNull();
  });

  it('Clicking Approve calls onApproveCandidate with the correct parameters', () => {
    const { getByRole } = renderCandidateInfoCard();
    const notesTextArea = getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(notesTextArea, { target: { value: 'test notes' } });

    expect(notesTextArea.value).toBe('test notes');
    fireEvent.click(getByRole('button', { name: 'Approve' }));

    expect(mockOnApproveCandidate).toHaveBeenCalledTimes(1);
    expect(mockOnApproveCandidate).toHaveBeenCalledWith(mockCandidate, 'test notes');
  });

  it('Clicking Reject calls onRejectCandidate with the correct parameters', () => {
    const { getByRole } = renderCandidateInfoCard();
    const notesTextArea = getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(notesTextArea, { target: { value: 'test notes 2' } });

    expect(notesTextArea.value).toBe('test notes 2');
    fireEvent.click(getByRole('button', { name: 'Reject' }));

    expect(mockOnRejectCandidate).toHaveBeenCalledTimes(1);
    expect(mockOnRejectCandidate).toHaveBeenCalledWith(mockCandidate, 'test notes 2');
  });

  it('Clicking Edit Review calls onClickEditReview with the correct parameters', () => {
    const { getByRole } = renderCandidateInfoCard(mockApprovedCandidate);

    fireEvent.click(getByRole('button', { name: 'Edit Review' }));

    expect(mockOnClickEditReview).toHaveBeenCalledTimes(1);
    expect(mockOnClickEditReview).toHaveBeenCalledWith(mockApprovedCandidate, 'this candidate is great');
  });
});
