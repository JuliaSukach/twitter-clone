import React from "react";
import Feed from "../feed/Feed";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";

function User() {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default User;