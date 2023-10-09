import { Avatar } from "primereact/avatar"
import { useEffect, useState } from "react"
import { getChatListById } from "../../../services/communication/ChatListService"
import { ChatList } from "../../../class/communication/ChatList"
import { User } from "../../../class/user/User"

import {io} from 'socket.io-client'

const messages: any[] = [


    {
        id: 3,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto nam iste mollitia voluptatum dicta rem eum ",
        image: '/user2.png',
        type: 'received'
    },
    {
        id: 2,
        content: "Lorem ipsum dolor  ",
        image: '/user1.png',
        type: 'sended'
    },
    {
        id: 4,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto nam iste mollitia voluptatum dicta rem eum ",
        image: '/user2.png',
        type: 'received'
    },
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto nam iste mollitia voluptatum dicta rem eum ",
        image: '/user1.png',
        type: 'sended'
    },
    {
        id: 5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto nam iste mollitia voluptatum dicta rem eum ",
        image: '/user2.png',
        type: 'received'
    },
]
export const Communication = () => {

    const [chatList, setChatList] = useState<ChatList>()
    const [selectedUser,setSelectedUser] = useState<User>(null)

    useEffect(() => {
        const socket = io('http://localhost:3000')
        socket.on('connect', ()=>console.log(socket.id))
        getChatListById(JSON.parse(localStorage.getItem('user'))['_id'])
            .then((response) => {

                setChatList(response['data'])
            })
            .catch(error => console.error(error))
    }, [])

    
    const selectUser = (user:User)=>{
        setSelectedUser(user)
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
                                    <li className="bg-slate-200 rounded-lg" key={user._id} onClick={()=>selectUser(user)}>
                                        <a className="flex flex-row  m-1 p-2">
                                            <Avatar image={user.profile} size="large" shape="circle" />
                                            <p className="p-3 text-base text-black font-bold">{user?.firstName+" " + user?.lastName}</p>
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 bg-slate-200 m-2 rounded-lg">
                    {
                        selectedUser ? <MessageContainer  user={selectedUser}/>: <InfoContainer />
                    }
                </div>
            </div>
        </section>
    )
}

const InfoContainer = ()=>{
    return (
        <>
            <img src="/chat/wechat.png" className="h-80 mx-auto" alt="chat app" loading="lazy"/>
            <p className="text-green-600 font-bold font-mono text-3xl text-center p-5"><i className="fa-solid fa-comments px-3"></i>Connect with people<i className="fa-solid fa-message px-3"></i></p>
        </>
    )
}
const MessageContainer = ({user})=>{
    return (
        <>
         <div className=" flex flex-row bg-slate-100 rounded-lg h-10 m-2 p-1">
                        <Avatar image={user.profile} size="normal" shape="circle"  />
                        <p className="text-lg font-bold px-2">
                            {user.firstName+" " + user.lastName}
                        </p>
                    </div>
                    <div className="h-[24rem] overflow-x-hidden overflow-y-scroll">
                        {
                            messages.map((message) => (
                                <div className={`flex ${message.type === 'received' ? "flex-row" : "flex-row-reverse"}`} key={message.id}>
                                    <Avatar className="m-2" image={message.image} size="normal" shape="circle" />
                                    <div className="m-2 rounded-lg">
                                        <p className={`text-white ${message.type == 'received' ? "bg-blue-500" : "bg-green-600"} text-sm font-bold font-mono max-w-sm rounded-lg p-2`}>
                                            {message.content}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row  bg-white rounded-lg m-2">
                        <textarea name="" id="" placeholder="Type Message" className="p-2 rounded-lg w-full" cols={30} rows={1}>
                        </textarea>
                        <button className="p-2 m-2">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
        </>
    )
}