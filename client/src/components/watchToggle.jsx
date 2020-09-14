import React from 'react';
class WatchToggle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='watch-button-container'>
                <div className='watched-tab' onClick={this.props.toggleWatched}> watched</div>
                <div className='to-watch-tab' onClick={this.props.toggleToWatch}>to watch</div>

            </div>
        )
    }
}

export default WatchToggle;