import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieQuery = 'Harry'
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieQuery}&type=movie`);

    return response.data;
})

export const fetchAsyncSeries = createAsyncThunk('series/fetchAsyncSeries', async () => {
    const seriesQuery = 'Friends'
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesQuery}&type=series`);

    return response.data;
})


//select
export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk('selectedMovieOrShow/fetchAsyncMovieOrSeriesDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);

    return response.data;
})

const initialState = {
    movies: {},
    series: {},
    selectedMovieOrShow: {},
    loading: false,
    error: ''
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload
                state.error = ''
            })
            .addCase(fetchAsyncSeries.fulfilled, (state, action) => {
                state.loading = false
                state.series = action.payload
                state.error = ''
            })
            .addCase(fetchAsyncMovieOrSeriesDetail.fulfilled, (state, action) => {
                state.loading = false
                state.selectedMovieOrShow = action.payload
                state.error = ''
            })
            .addCase(fetchAsyncMovies.rejected, (state, action) => {
                state.loading = false
                state.movies = {}
                state.error = action.error.message
            })
    },
})


export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;