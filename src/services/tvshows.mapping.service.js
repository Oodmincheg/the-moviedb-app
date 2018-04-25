export class TvShowEntity {
    constructor(entity) {
        this.id = entity.id || '';
        this.title = entity.name || '';
        this.adult = entity.adult || '';
        this.overview = entity.overview || '';
        this.poster = 'https://image.tmdb.org/t/p/w185' + entity.poster_path || '';
        this.backdrop = 'https://image.tmdb.org/t/p/w500' + entity.backdrop_path || '';
        this.genre_ids = entity.genre_ids || '';
        this.vote = entity.vote_average || '';
        this.isInLibrary = false;
        this.type = 'tvshow';
        this.watched = true;
    }
}