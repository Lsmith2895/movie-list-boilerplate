import React from 'react';
class WatchToggle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='watch-button-container'>
                <div className='watched-tab'> watched</div>
                <div className='to-watch-tab'>to watch</div>

            </div>
        )
    }
}

export default WatchToggle;