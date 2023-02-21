import {
  getRandomCandidate,
  getSavedCandidates,
  saveCandidate,
  updateCandidateReview,
} from 'services/CandidateService';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import type { Candidate } from 'types/Candidate';
import { mockApprovedCandidate, mockCandidate, mockRejectedCandidate } from '../../../jest/testData';

enableFetchMocks();

jest.mock('src/utils/generateId', () => ({
  generateId: () => 'test-id',
}));

describe('CandidateService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('getRandomCandidate returns one candidate', async () => {
    fetch.mockResponseOnce(JSON.stringify({ results: [mockCandidate, mockCandidate], info: {} }));
    expect(await getRandomCandidate()).toStrictEqual(mockCandidate);
  });

  it('getSavedCandidates returns candidates from localStorage', async () => {
    expect(await getSavedCandidates()).toStrictEqual([mockApprovedCandidate, mockRejectedCandidate]);
  });

  it('saveCandidate saves a candidate to localStorage', async () => {
    const newCandidate: Candidate = {
      ...mockCandidate,
      name: { title: 'Mr', first: 'Tony', last: 'Stark' },
    };

    await saveCandidate(newCandidate, 'approved', 'overqualified');

    expect(JSON.parse(localStorage.getItem('candidates') as string)).toStrictEqual([
      mockApprovedCandidate,
      mockRejectedCandidate,
      expect.objectContaining({ ...newCandidate, notes: 'overqualified', status: 'approved', savedId: 'test-id' }),
    ]);
  });

  it('updateCandidateReview updates a candidate in localStorage', async () => {
    localStorage.clear();
    await updateCandidateReview(mockApprovedCandidate, 'rejected', 'actually they are not that great after all');

    expect(JSON.parse(localStorage.getItem('candidates') as string)).toStrictEqual([
      { ...mockApprovedCandidate, status: 'rejected', notes: 'actually they are not that great after all' },
      mockRejectedCandidate,
    ]);
  });
});
