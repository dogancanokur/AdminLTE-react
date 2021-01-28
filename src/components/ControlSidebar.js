import React, {Component} from 'react';

class ControlSidebar extends Component {
    render() {
        return (
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
        );
    }
}

export default ControlSidebar;