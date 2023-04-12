import React, { useEffect, useState } from "react";
import { Tab, Nav, Button, Modal, TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { getSUser } from "../../utils/api";
import DefinedConvo from "./DefinedConvo";

export default function ConvoHistory({ chat, currentUser }) {
  const [user, setUser] = useState(null);

  // const array = []
  // console.log(friend.length)
  // console.log(array)
  useEffect(() => {
    // const friend = chat.find((m) => m !== currentUser.data._id)
    const friend = chat.filter((m) => m !== currentUser.data._id);
    // console.log(currentUser.data._id)
    // const friend = chat.find((m) => m !== currentUser.data._id)
    console.log(friend);

    // const handleFriends = async() => {
    //     try{
    //         const response = await getSUser(friend)
    //         console.log(response)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    const getUser = async () => {
      try {

        const res = await axios.get(`/api/users/${friend}`);

        console.log(friend);
        console.log(res.data);
        setUser(res.data);
    
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return <h3>LOADING...</h3>;
  }

  return (
    <div>
      <Tab.Container>
        {/* <h3>TEST</h3> */}
        {/* <h3>{user.email}</h3> */}
        {/* {user.map((e) => (
           <h3>{e}</h3>
            ))} */}

        <Nav>
          <Nav.Item>
            {/* <h3>TEST</h3> */}
            <Nav.Link as={Link} to={"/convoTwo"} state={{ user: user._id }}>
              {user.email}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  );
}
