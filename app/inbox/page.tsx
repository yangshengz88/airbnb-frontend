import Conversation from "../components/inbox/conversation"


export default function InboxPage(){
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">My inbox</h1>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </main>
    );
}