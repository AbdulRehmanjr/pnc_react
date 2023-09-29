import { Avatar } from "primereact/avatar"

const chatList: any[] = [
    {
        id: 1,
        image: '/user1.png',
        name: 'Abdul Rehman',
    },
    {
        id: 2,
        image: '/icons/user.png',
        name: 'Tester 1',
    },
    {
        id: 3,
        image: '/user2.png',
        name: 'Tester2',
    },
    {
        id: 4,
        image: '/user1.png',
        name: 'Spy Dev',
    },
    {
        id: 5,
        image: '/icons/user.png',
        name: 'Spy101',
    }
]
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
                                chatList.map(chat => (
                                    <li className="bg-slate-200 m-1 p-2 rounded-lg">
                                        <a href="" className="flex flex-row">
                                            <Avatar image={chat.image} size="large" shape="circle" />
                                            <p className="p-3 text-base text-black font-bold">{chat.name}</p>
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="col-span-3 bg-slate-200 m-2 rounded-lg">
                    <div className=" flex flex-row bg-slate-100 rounded-lg h-10 m-2 p-1">
                        <Avatar  image="/user2.png" size="normal" shape="circle" />
                            <p className="text-lg font-bold px-2">
                                Abdul Rehman
                            </p>
                    </div>
                    <div className="h-[24rem] overflow-x-hidden overflow-y-scroll">
                        {
                            messages.map((message) => (
                                <div className={`flex ${message.type === 'received' ? "flex-row" : "flex-row-reverse"}`}>
                                    <Avatar className="m-2" image={message.image} size="normal" shape="circle" />
                                    <div className="m-2 rounded-lg">
                                        <p className={`text-white ${message.type=='received'?"bg-blue-500":"bg-green-600"} text-sm font-bold font-mono max-w-sm rounded-lg p-2`}>
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
                </div>
            </div>
        </section>
    )
}