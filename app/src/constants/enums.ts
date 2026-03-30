export enum EventCategory {
  ALL = 'All',
  ARTS = 'Arts',
  SCIENCE = 'Science',
  PROGRAMS = 'Programs',
  SPORTS = 'Sports',
  MUSIC = 'Music',
  EDUCATIONAL = 'Educational',
  CULTURAL = 'Cultural',
}

// Helper function to get all category values as an array
export const getAllCategories = (): string[] => {
  return Object.values(EventCategory);
};
