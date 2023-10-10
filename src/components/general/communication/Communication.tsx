/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from "primereact/avatar"
import { useEffect, useState } from "react"
import { getChatListById } from "../../../services/communication/ChatListService"
import { ChatList } from "../../../class/communication/ChatList"
import { User } from "../../../class/user/User"

import { Socket, connect, io } from 'socket.io-client'
import { Message } from "../../../class/communication/Message"
import { FieldValues, useForm } from "react-hook-form"


export const Communication = () => {

    const [chatList, setChatList] = useState<ChatList>()
    const [selectedUser, setSelectedUser] = useState<User>(null)
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState<Message>(null)
    const [user, setUser] = useState<User>(null)

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {

        setUser(JSON.parse(localStorage.getItem('user')))
        getChatListById(JSON.parse(localStorage.getItem('user'))['_id'])
            .then((response) => {

                setChatList(response['data'])
            })
            .catch(error => console.error(error))
    }, [])


    

    useEffect(() => {
        if (selectedUser) {
            socketConnection();
        }
    }, [selectedUser]);

    useEffect(() => {
        if(socket){
            socket.on('receive_message', (data) => {
                setMessages([...messages, data]);
              });          
        }

      }, [messages]);
   
    const sendMessage = (data: FieldValues) => {

        if (data.message == '')
            return
        let newMessage = new Message()
        newMessage._id = Math.random().toString()
        newMessage.content = data.message
        newMessage.receiverId = selectedUser._id
        newMessage.senderId = user._id
        newMessage.type = 'sended'

        socket?.emit('send_message', newMessage);

       setMessages(()=>[...messages,newMessage])

        reset()
    }



    const socketConnection = () => {
        console.log('connection')
        const connection = io('http://localhost:3000');
        connection.on('connect', () => {
            console.log(`MY Socket connected: ${connection.id} user id ${user._id}` );
            setSocket(connection);
        });

        if (selectedUser) {
            console.log('join room')
            connection.emit('add_user', user._id);
        }
        connection.on('receive_message', (data) => {
            console.log('recieive data',data)
            setMessages((prevMessages) => [...prevMessages, data]);
        });
        connection.on('disconnect', () => console.log('disconnected'))

    }
    const selectUser = (user: User) => {
        setSelectedUser(user)
    }

    const MessageContainer = () => {
        return (
            <>
                <div className=" flex flex-row bg-slate-100 rounded-lg h-10 m-2 p-1">
                    <Avatar image={user.profile} size="normal" shape="circle" />
                    <p className="text-lg font-bold px-2">
                        {user.firstName + " " + user.lastName}
                    </p>
                </div>
                <div className="h-[24rem] overflow-x-hidden overflow-y-scroll">
                    {
                        messages.map((message: Message) => (
                            <div className={`flex ${message?.senderId != user?._id ? "flex-row" : "flex-row-reverse"}`} key={message?._id ? message._id : Math.random.toString()}>
                                <Avatar className="m-2" image={user.profile} size="normal" shape="circle" />
                                <div className="m-2 rounded-lg">
                                    <p className={`text-white ${message?.senderId != user?._id ? "bg-blue-500" : "bg-green-600"} text-sm font-bold font-mono max-w-sm rounded-lg p-2`}>
                                        {message?.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form className="flex flex-row  bg-white rounded-lg m-2" onSubmit={handleSubmit(sendMessage)}>
                    <textarea name="message" id="message" {...register('message')} placeholder="Type Message" className="p-2 rounded-lg w-full" cols={30} rows={1} >
                    </textarea>
                    <button className="p-2 m-2">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </>
        )
    }

    return (
        <section className="bg-green-300 rounded-lg m-4">
            <div className="grid grid-cols-4">
                <div className="col-span-1 bg-slate-200 m-2 rounded-lg">
                    <div className="m-2 flex flex-row bg-white rounded-md">
                        <input type="text" placeholder="Search" className="font-bold font-serif text-base rounded-md p-2" />
                        <i className="fas fa-search text-xl mx-auto p-2"></i>
                    </div>
                    <div className="m-2 relative h-[calc(100vh-194px)] overflow-y-scroll overflow-x-hidden">
                        <ul className="p-2 list-none bg-white rounded-lg h-full">
                            {
                                chatList?.list?.map((user: User) => (
                                    <li className="bg-slate-200 rounded-lg" key={user._id} onClick={() => selectUser(user)}>
                                        <a className="flex flex-row  m-1 p-2">
                                            <Avatar image={user.profile} size="large" shape="circle" />
                                            <p className="p-3 text-base text-black font-bold">{user?.firstName + " " + user?.lastName}</p>
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 bg-slate-200 m-2 rounded-lg">
                    {
                        selectedUser ? <MessageContainer /> : <InfoContainer />
                    }
                </div>
            </div>
        </section>
    )
}
const InfoContainer = () => {
    return (
        <>
            <img src="/chat/wechat.png" className="h-80 mx-auto" alt="chat app" loading="lazy" />
            <p className="text-green-600 font-bold font-mono text-3xl text-center p-5"><i className="fa-solid fa-comments px-3"></i>Connect with people<i className="fa-solid fa-message px-3"></i></p>
        </>
    )
}
