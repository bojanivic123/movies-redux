class MovieService {
  constructor() {
    this.nextId = 3;
    this.movies = [
      {
        id: 1,
        title: 'Scary Movie',
        director: 'John Doe',
        imageUrl: 'https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg',
        duration: 120,
        releaseDate: 2005,
        genre: 'comedy',
      },
      {
        id: 2,
        title: 'Kill Bill',
        director: 'John Doe',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        duration: 113,
        releaseDate: 2006,
        genre: 'action',
      },
    ];
  }

  getAll() {
    return Promise.resolve([...this.movies]);
  }
}

export default new MovieService();
