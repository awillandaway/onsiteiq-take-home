interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface TimeSinceDate {
  date: Date;
  age: number; // years elapsed since date
}

interface ID {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export type Status = 'approved' | 'rejected' | 'not_yet_reviewed';

export interface Candidate {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  // login info omitted
  dob: TimeSinceDate;
  registered: TimeSinceDate;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
  status: Status;
  notes?: string;
  savedId?: string; // named this way to avoid conflict with existing ID field from original randomuser API
}
