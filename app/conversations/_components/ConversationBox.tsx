"use client"

import { useOtherUser } from "@/app/_hooks/useOtherUser";
import { FullConversationType } from "@/app/_types";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {

    const otherUser = useOtherUser(data)
    const clerkUser = useClerk().user
    const router = useRouter()

    return ( 
        <div></div>
     );
}
 
export default ConversationBox;