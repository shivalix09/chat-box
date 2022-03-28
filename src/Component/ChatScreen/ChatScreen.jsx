import { Delete } from "@mui/icons-material";
import {
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { db } from "../../firebase";
import firebase from "firebase";
import { Send } from "@mui/icons-material";
import GenerateUsername from "generate-username-from-email";
import { removeToken, removeUserInfo } from "../../Helper/index";
import "./ChatScreen.css";
import moment from "moment";
import { getUserInfo } from "../../Helper";
import { useHistory } from "react-router-dom";

export const ChatScreen = () => {
  const [todosList, setTodosList] = useState([]);
  const [message, setMessage] = useState("");
  const username = getUserInfo();
  const history = useHistory();

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((messages) => {
        setTodosList([...messages.docs.map((doc) => doc.data())]);
      });
  }, []);

  const handleAddMessage = () => {
    db.collection("messages").add({
      name: getUserInfo(),
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      messageTime: moment
        .unix(firebase.firestore.Timestamp.now().seconds)
        .format("h:mm a"),
    });

    setMessage("");
  };

  const addMessageButton = (
    <form className="App_form">
      <div className="App_form_control">
        <TextField
          label="message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          style={{ width: "100%",maxWidth:"800px" ,backgroundColor: "white" }}
        />

        <IconButton
          onClick={handleAddMessage}
          name="Chat"
          style={{ width: "fit-contant" }}
          disabled={!message}
        >
          <Send fontSize="large" />
        </IconButton>
      </div>
    </form>
  );

  function renderItem(item, index) {
    return (
      <ListItem
        className={username === item.name ? "user-msg" : "guestuser-msg"}
        key={index}
      >
        <ListItemText primary={item.message} />
      </ListItem>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="Main-div ">
        <a
          style={{
            position: "fixed",
            zIndex: "111",
            margin: "10px",
            top: 0,
            right: 0,
            color: "blue",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            removeUserInfo();
            removeToken();
            return history.push("/login");
          }}
        >
          logout
        </a>
        {addMessageButton}

        <Paper elevation={2} style={{ width: "100%", margin: "auto", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
          {todosList.length > 0 ? (
            <List style={{ marginBottom: "80px", width:"100%"}}>
              <TransitionGroup>
                {todosList.map((item, index) => {
                  return (
                    <Collapse
                      key={index}
                      className={username === item.name ? "user" : "guestuser"}
                    >
                      {renderItem(item, index)}
                      <span
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          flexDirection:
                            username === item.name ? "row-reverse" : "row",
                        }}
                      >
                        {GenerateUsername(item.name)}
                      </span>
                    </Collapse>
                  );
                })}
              </TransitionGroup>
            </List>
          ) : (
            <Typography variant="h4" align="center">
              No messages Here
            </Typography>
          )}
        </Paper>
      </div>
    </div>
  );
};
