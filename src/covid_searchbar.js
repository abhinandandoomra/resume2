import React from "react";
import ReactDOM from 'react-dom';


class Search_bar extends React.Component {
    render() {
        return (
            <div className="search_bar_container">
                <div className="search_wrap">
                    <input classname="search_input" type="text" />
                    <div className="search_icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search_bar;
