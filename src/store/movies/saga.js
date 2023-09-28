import { call, put, takeLatest } from 'redux-saga/effects';
import { performFetchMovies, performSearchMovies, setMovies } from './slice';
import movieService from '../../services/movieService';

function* fetchMoviesHandler() {
  try {
    const data = yield call(movieService.getAll);
    yield put(setMovies(data));
  } catch (error) {
    console.log(error);
  }
}

function* searchMoviesHandler(action) {
  try {
    const data = yield call(movieService.searchMovies, action.payload);
    yield put(setMovies(data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchMovies() {
  yield takeLatest(performFetchMovies.type, fetchMoviesHandler);
}

export function* watchSearchMovies() {
  yield takeLatest(performSearchMovies.type, searchMoviesHandler);
}
