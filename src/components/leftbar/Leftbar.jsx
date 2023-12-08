import './leftbar.scss'


function Leftbar() {
  return (
    <div className='leftBar'>
        <div className='container'>
            <div className='menu'>
                <div className='user'>
                    <img src=''alt=''/>
                    <span>Neeraj Vishwakarma</span>
                </div>
                <div className='item'>
                    <img src='' alt=''/>
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Memories</span>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <span>Your Shortcut</span>
                <div className="item">
                    <img src="" alt="" />
                    <span>Events</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span> Gaming</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Videos</span>
                </div>
                
                <div className="item">
                    <img src="" alt="" />
                    <span>Message</span>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <span>Others</span>
                <div className="item">
                    <img src="" alt="" />
                    <span> Gaming</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Videos</span>
                </div>
                
                <div className="item">
                    <img src="" alt="" />
                    <span>Message</span>
                </div>
            </div>

        </div>




    </div>
  )
}

export default Leftbar