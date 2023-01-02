package websocket

import (
	"github.com/gorilla/websocket";
	"fmt";
	"log";
	"sync"
)


type Client struct{
	ID	string
	Conn	*websocket.Conn
	Pool	*Pool
	mu		sync.Mutex
}

type Message struct{
	Type	int	`json:"type"`
	Body	string `json:"body"`
}

func (c *Client) Read(){ //After we have read from the client we want to unregister him
	defer func(){
		c.Pool.Unregister <- c
		c.Conn.Close()	
	}()
	for{

	messageType, p, err:=c.Conn.ReadMessage()
		if err!= nil{
			log.Println(err)
			return
		}
		message:= Message{
			Type: messageType,
			Body: string(p),
		}
		c.Pool.Broadcast <- message
		fmt.Printf("Message received: %+v\n", message)
	}
		
}