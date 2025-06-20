import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id:'u1', 
            name:'Adi', 
            image:'https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/valley.jpg?itok=94H9MLGq', 
            places:3
        }
    ];
    return <UsersList items={USERS}/>;
};

export default Users