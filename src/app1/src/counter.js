import React from 'react';
import { connect } from 'react-redux';
import EventBus from 'eventing-bus/lib/window_event_stream';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    globalIncrement = () => {
        this.props.globalStoreEventDistributor.dispatch({ type: 'INCREMENT' });
    };

    globalDecrement = () => {
        this.props.globalStoreEventDistributor.dispatch({ type: 'DECREMENT' });
    };

    
    dispatchChangePath = () => {
        EventBus.publish(this.props.eventsConstants.CHANGE_PATH, { 
            app: "app2",
            action: "active",
            args: { title: 3 },
            query: { "testQuery": 1 }
        });
    };

    render() {
        return (
            <div>
                <br />
                <div>
                    <b> Count: {this.props.count}</b><br/><br/>
                    <button onClick={this.increment}>local increment</button>
                    &nbsp;Send a <b>local</b> increment event. This will only increase the counter for the current app. <br/>

                    <button onClick={this.decrement}>local decrement</button>
                    &nbsp;Send a <b>local</b> decrement event. This will only decrement the counter for the current app. <br/>


                    <button onClick={this.globalIncrement}>global increment</button>
                    &nbsp;Send a <b>global</b> increment event. This will increase the counter for the current app and all
                    other apps that listen to this event. <br/>

                    <button onClick={this.globalDecrement}>global decrement</button>
                    &nbsp;Send a <b>global</b> decrement event. This will increase the counter for the current app and all
                    other apps that listen to this event. <br/>
                </div>
                <button onClick={this.dispatchChangePath}>change path</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);