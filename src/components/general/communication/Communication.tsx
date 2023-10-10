/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from "primereact/avatar"
import { useEffect, useState } from "react"
import { getChatListById } from "../../../services/communication/ChatListService"
import { ChatList } from "../../../class/communication/ChatList"
import { User } from "../../../class/user/User"
import { MessageContainer } from "./MessageContainer"


export const Communication = () => {

    const [chatList, setChatList] = useState<ChatList>()
    const [selectedUser, setSelectedUser] = useState<User>(null)
    
    useEffect(() => {
        
        getChatListById(JSON.parse(localStorage.getItem('user'))['_id'])
            .then((response) => { setChatList(response['data']) })
            .catch(error => console.error(error))
    }, [])
  

    const selectUser = (user: User) => {
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
                        selectedUser ? <MessageContainer selectedUser={selectedUser}  /> : <InfoContainer />
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
