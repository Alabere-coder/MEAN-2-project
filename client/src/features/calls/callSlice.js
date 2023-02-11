import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './callService'

const initialState = {
    calls: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new goal
export const createCall = createAsyncThunk(
    'calls/create',
    async (callData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.createCall(callData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user goals
export const getCalls = createAsyncThunk(
    'calls/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.getCalls(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user goal
export const deleteCall = createAsyncThunk(
    'calls/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.deleteCall(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCall.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCall.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createCall.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCalls.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCalls.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getCalls.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteCall.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCall.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.calls = state.calls.filter(
                    (call) => call._id !== action.payload.id
                )
            })
            .addCase(deleteCall.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = callSlice.actions
export default callSlice.reducer