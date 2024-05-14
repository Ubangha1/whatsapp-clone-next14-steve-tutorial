// We're importing special tools from Next.js and React.
import { useParams } from "next/navigation"; // This tool helps us get information from the web address.
import { useMemo } from "react"; // This tool helps us remember things so we don't have to do them again and again.

// This is like a magic spell we're creating. It helps us do something special.
export const useConversation = () => {
    // This is like a little box where we keep things we found in the web address.
    const params = useParams();

    // Here we're making a special note about a thing we found in the web address.
    // We want to remember if we found something called "conversationId".
    const conversationId = useMemo(() => {
        // If we didn't find anything called "conversationId", we just say it's empty.
        if (!params?.conversationId) {
            return '';
        }
        // But if we did find something called "conversationId", we write it down.
        return params.conversationId as string;
    }, [params?.conversationId]); // We say, "Hey, remember this only if it changes."

    // Now we want to know if we found anything at all in the "conversationId" box.
    // If we found something, we say, "Yes, there's a conversation open!" Otherwise, we say, "Nope, nothing here."
    const isOpen = useMemo(() => !!conversationId, [conversationId]);

    // We're putting everything we found in a special bag to give to someone else.
    // We're telling them, "Hey, this bag has two things: whether the conversation is open and the ID of the conversation."
    // And we're also saying, "Remember this bag only if something inside changes."
    return useMemo(() => ({
        isOpen, // We put in if the conversation is open or not.
        conversationId // We put in the ID of the conversation.
    }), [isOpen, conversationId]); // We say, "Hey, remember this bag only if something inside changes."
}

// We're telling everyone that this magic spell we made is ready to be used by others.
//export default useConversation;







