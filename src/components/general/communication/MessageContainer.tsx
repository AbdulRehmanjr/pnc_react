/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from "primereact/avatar";
import { useEffect, useRef, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { getCurrentTimeInAMPM } from "../../../utils/Utils";
import { Message } from "../../../class/communication/Message";
import { Socket, io } from "socket.io-client";
import { User } from "../../../class/user/User";
import { getChatMessages } from "../../../services/communication/MessageService";



export const MessageContainer = ({ selectedUser }) => {

    const [messages, setMessages] = useState<Message[]>([])
    const [socket, setSocket] = useState<Socket>()
    const { register, handleSubmit, reset, control } = useForm()
    const [user, setUser] = useState<User>()

    const messageContainer = useRef<HTMLDivElement>()

    useEffect(() => {
        setUser(() => JSON.parse(localStorage.getItem('user')))
        getChatMessages(JSON.parse(localStorage.getItem('user'))['_id'], selectedUser._id)
            .then(response => setMessages(response['data']))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        if (selectedUser)
            socketConnection();
    }, [selectedUser]);

    useEffect(() => {
        if (socket) {
            socket.on('receive_message', (data) => {
                setMessages([...messages, data]);
            });
        }
    }, [messages]);


    const socketConnection = () => {
        const connection = io('http://localhost:3000');
        connection.on('connect', () => {
            setSocket(connection);
        })
        if (selectedUser)
            connection.emit('add_user', user?._id)
        connection.on('receive_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        })
        connection.on('disconnect', () => console.log('disconnected'))
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainer.current) {
            messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
        }
    };
    const sendMessage = (data: FieldValues) => {
        if (data.message == '')
            return

        let newMessage = new Message()
        newMessage.content = data.message
        newMessage.receiverId = selectedUser._id
        newMessage.senderId = user._id
        newMessage.time = getCurrentTimeInAMPM()


        socket?.emit('send_message', newMessage);
        setMessages(() => [...messages, newMessage])

        reset()
    }


    return (
        <>
            <div className=" flex flex-row bg-slate-100 rounded-lg h-10 m-2 p-1">
                <Avatar image={selectedUser?.profile} size="normal" shape="circle" />
                <p className="text-lg font-bold px-2">
                    {selectedUser?.firstName + " " + selectedUser?.lastName}
                </p>
            </div>
            <div className="h-[24rem] overflow-x-hidden overflow-y-scroll" style={{ scrollbarWidth: 'none' }} ref={messageContainer}>
                {
                    messages.map((message: Message, index: number) => (
                        <div className={`flex ${message?.senderId != user?._id ? "flex-row" : "flex-row-reverse"}`} key={index}>
                            <Avatar className="m-2" image={user.profile} size="normal" shape="circle" />
                            <div className="m-2 rounded-lg">
                                <p className={`text-white ${message?.senderId != user?._id ? "bg-blue-500" : "bg-green-600"} text-sm font-bold font-mono max-w-sm   rounded-lg p-2`}>
                                    {message?.content}
                                    <br />
                                    <span className="text-xs">{message?.time}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row  bg-white rounded-lg m-2">
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <textarea
                            {...field}
                            placeholder="Type Message"
                            className="p-2 rounded-lg w-full"
                            cols={30}
                            rows={1}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSubmit(sendMessage)();
                                }
                            }}
                            autoFocus={true}
                        />
                    )}
                />
            
            <button className="p-2 m-2" onClick={() => handleSubmit(sendMessage)()}>
                <i className="fas fa-paper-plane"></i>
            </button>
        </div >
        </>
    )
}