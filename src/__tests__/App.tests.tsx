import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mockApprovedCandidate, mockCandidate, mockRejectedCandidate } from '../../jest/testData';
import App from '../App';

const mockCandidates = JSON.parse(localStorage.getItem('candidates') as string);

jest.mock('src/services/CandidateService', () => ({
  getRandomCandidate: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve(mockCandidate);
      }),
  ),
  getSavedCandidates: jest.fn(
    () =>
      new Promise((resolve) => {
        resolve(mockCandidates);
      }),
  ),
  saveCandidate: jest.fn(),
  updateCandidate: jest.fn(),
}));

describe('App', () => {
  it('Renders correctly', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Renders the Start New Review section on initial render', async () => {
    const { findByText, findByRole } = render(<App />);

    expect(await findByText('Please click the Start New Candidate Review button to start a review.')).toBeVisible();
    expect(await findByRole('button', { name: 'Start New Candidate Review' })).toBeVisible();
  });

  it('Loads saved (reviewed) candidates on render', async () => {
    const { findAllByTestId } = render(<App />);

    expect(JSON.parse(localStorage.getItem('candidates') as string)).toStrictEqual([
      mockApprovedCandidate,
      mockRejectedCandidate,
    ]);

    const candidateInfoCards = await findAllByTestId('candidate-info-card');

    expect(candidateInfoCards).toHaveLength(2);
  });

  it('Clicking the Start New Candidate Review button replaces the Start New Review section with a candidate to review', async () => {
    const { findAllByTestId, queryByText, findByRole } = render(<App />);

    const startNewReviewButton = await findByRole('button', { name: 'Start New Candidate Review' });

    fireEvent.click(startNewReviewButton);

    await waitForElementToBeRemoved(() =>
      queryByText('Please click the Start New Candidate Review button to start a review.'),
    );

    const candidateInfoCards = await findAllByTestId('candidate-info-card');

    expect(candidateInfoCards).toHaveLength(3); // 1 card for the new review, 2 cards for the saved reviews
  });
});
