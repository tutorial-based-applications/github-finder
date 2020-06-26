import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const userItem = ({user: {login, avatar_url}}) => {

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="Github avatar" className="round-image" style={{width: '60px'}}/>                
                <h1>{login}</h1>
                <div>
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                        More
                    </Link>
                </div>
            </div>
        )
}

userItem.propTypes = {
    user: propTypes.object.isRequired,
    
}

export default userItem
