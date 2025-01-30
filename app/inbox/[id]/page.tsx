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


 
type Params = Promise<{ id: string }>

export default async function ConversationPage({params}: {params: Params} ){
    const userId = await getUserId();
    const token = await getAccessToken();
    const {id} = await params;

    if (!userId || !token || !id){
        return (
            <main className="max-w-[1500px] mx-auto px-6 py-12">
                <p>You need to be authenticated...</p>
            </main>
        );
    }
    
    const conversation = await apiService.get(`/api/chat/${id}/`)

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
