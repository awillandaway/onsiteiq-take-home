import type { Candidate } from '../src/types/Candidate';

export const mockCandidate: Candidate = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'John',
    last: 'Smith',
  },
  location: {
    street: {
      number: 1,
      name: 'Test Street',
    },
    city: 'New York',
    state: 'New York',
    country: 'United States',
    postcode: 11111,
    coordinates: {
      latitude: 'test-latitude',
      longitude: 'test-longitude',
    },
    timezone: {
      offset: '-5:00',
      description: 'US East',
    },
  },
  email: 'john.smith@test.com',
  dob: {
    date: '1955-11-04T21:17:18.030Z',
    age: 67,
  },
  registered: {
    date: '2017-10-15T15:36:03.501Z',
    age: 5,
  },
  phone: '(123) 456-7890',
  cell: '(111) 111-1111',
  id: {
    name: 'drivers license',
    value: '11111111111',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/76.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
  },
  nat: 'US',
  status: 'not_yet_reviewed',
  savedId: 'test-not-reviewed-id',
};

export const mockApprovedCandidate: Candidate = {
  ...mockCandidate,
  status: 'approved',
  savedId: 'test-approved-id',
  notes: 'this candidate is great',
};

export const mockRejectedCandidate: Candidate = { ...mockCandidate, status: 'rejected', savedId: 'test-rejected-id' };
