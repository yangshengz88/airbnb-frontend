import ConversationDetail from "@/app/components/inbox/coversation-detail";
import { getAccessToken, getUserId } from "@/app/lib/actions";
import { UserType } from "../page";
import apiService from "@/app/services/api-service";

export type MessageType = {
    id:string;
    name: string;
    body: string;
    conversationId: string;
    sent_to:UserType;
    created_by: UserType;
}
const ConversationPage= async ({params}: {params: {id:string}} )=>{
    const userId = await getUserId();
    const token = await getAccessToken();

    if (!userId || !token){
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be authenticated...</p>
            </main>
        );
    }

    const conversation = await apiService.get(`/api/chat/${params.id}/`)

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
                conversation={conversation.conversation}
                messages= {conversation.messages}
                token= {token}
                userId= {userId}
            />
        </main>
    );
}
export default ConversationPage;