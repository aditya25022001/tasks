import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShowsAction } from '../actions/userActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Show } from '../components/Show'

export const HomeScreen = () => {
    
    const dispatch = useDispatch()
    
    const userShows = useSelector(state => state.userShows)
    const { loading, error, shows } = userShows

    useEffect(() => {
        if(shows && shows.length===0){
            dispatch(getShowsAction())
        }
    },[dispatch,shows])

    return (
        <>
            {error && <Message variant="error" message={error} />}
            {loading 
            ? <Loader/> 
            : <div className='d-flex homescreen mt-2'>
                {shows && shows.map((show, index) => (
                    <Show
                        key={index}
                        name={show.show.name}
                        premiered={show.show.premiered}
                        rating={show.show.rating}
                        image={show.show.image.original || show.show.image.medium}
                        summary={show.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                        id={show.show.id}
                    />
                ))}
            </div>}
        </>
    )
}
