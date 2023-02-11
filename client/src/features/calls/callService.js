import axios from 'axios'

const API_URL = '/api/calls/'

// Create new goal
const createCall = async (callData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, callData, config)

    return response.data
}

// Get user goals
const getCalls = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user goal
const deleteCall = async (callId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + callId, config)

    return response.data
}

const goalService = {
    createCall,
    getCalls,
    deleteCall,
}

export default goalService