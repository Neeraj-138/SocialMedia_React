import './rightbar.scss'

function Rightbar() {
  return (
    <div className='rightBar'>
        <div className='container'>
            <div className='item'>
                <span>Sujjested for you</span>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
                        <span > Neeraj </span>
                    </div>
                    <div className='buttons'>
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''></img>
                        <span > Neeraj </span>
                    </div>
                    <div className='buttons'>
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>

            </div>
            <div className='item'>
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div><div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>

            </div>
            <div className='item'>
                <span>Online Friends </span>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <div className='online'></div>
                            <span>Jane Doe</span> 
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <div className='online'></div>
                            <span>Jane Doe</span> 
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img
                            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <div className='online'></div>
                            <span>Jane Doe</span> 
                    </div>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default Rightbar