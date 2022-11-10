import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h4>USS Grimes</h4>
                        <ul className="list-unstyled">
                            <li>Info below for column</li>
                        </ul>
                    </div>
                </div>
                <div clasName="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Created by Tyler, Zach, Brian, Meghan, and Mike, with help from his amazing grandmother
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;