const moviesContent = ['Popular', 'Top Rated', 'Upcoming', 'Now Playing'];
const tvContent = ['Popular', 'Top Rated', 'On TV', 'Airing Today'];
const peopleContent = ['Popular People'];
const visibleContent = [
  'Contribution Bible',
  'Apps',
  'Discussions',
  'Leaderboard',
  'contribute',
  'API',
  'Support',
  'About',
  'Login',
];
const sortMap = {
  'Popularity descending': 'popularity.desc',
  // eslint-disable-next-line sort-keys
  'Popularity Ascending': 'popularity.asc',
  'Rating Ascending': 'rating.asc',
  'Rating descending': 'rating.desc',
  'Release Date Ascending': 'primary_release_date.asc',
  'Release Date descending': 'primary_release_date.desc',
  'title A-Z': 'title.asc',
  'title Z-A': 'title.desc',
};

const filtersList = [
  'Everything',
  "Movies I haven't Seen",
  'Movies I have Seen',
];

const availabilitiesList = [
  'Search all availabilities?',
  'Stream',
  'Free',
  'Ads',
  'Rent',
  'Buy',
];

const releaseList = [
  'Search all Releases?',
  'Search all Countries?',
  'Premier',
  'Theatrical (limited)',
  'Theatrical',
  'Digital',
  'Physical',
  'Tv',
];
const basicContent = [
  'About TMDB',
  'Contact Us',
  'Support Forums',
  'API',
  'System Status',
];

const involvedContent = [
  'Contribution Bible',
  'ADd new movie',
  'Add new TV show',
];

const communityContent = [
  'Guidelines',
  'Discussions',
  'Leaderboard',
  'Twitter',
];

const LegalContent = ['Terms OF Use', 'API Terms OF Use', 'Privacy Policy'];
const predictionsList = [
  'Jurassic World Dominion',
  'The Black Phone',
  'Lightyear',
  'Thor: Love and Thunder',
  'Resident Evil',
  'Doctor Strange  in the Multiverse Madness',
  'Stranger Things',
  'The Forgiven : Part 2. The Other One',
  'Virgin River',
];
export {
  predictionsList,
  basicContent,
  LegalContent,
  communityContent,
  involvedContent,
  moviesContent,
  peopleContent,
  tvContent,
  visibleContent,
  filtersList,
  sortMap,
  releaseList,
  availabilitiesList,
};
