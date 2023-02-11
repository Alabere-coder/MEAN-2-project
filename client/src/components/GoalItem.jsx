import { useDispatch } from 'react-redux'
import { deleteCall } from '../features/calls/callSlice'

function GoalItem({ call }) {
    const dispatch = useDispatch()

    return (
        <div className='call'>
        <div>{new Date(call.createdAt).toLocaleString('en-US')}</div>
        <h2>{call.text}</h2>
        <button onClick={() => dispatch(deleteCall(call._id))} className='close'>
            X
        </button>
        </div>
    )
}

export default GoalItem