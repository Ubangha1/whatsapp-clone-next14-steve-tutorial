import { db } from "@/lib/db"
import { getCurrentUser } from "./getCurrentUser"

const getConversations = async () => {
    // Get the current user from the database
    const { currentUserPrisma } = await getCurrentUser()

    // If there is no current user ID, return an empty array
    if (!currentUserPrisma.id) return []

    // Create a new message in the database (This line seems unnecessary and might be causing issues)
    // db.message.create({})

    try {
        // Fetch conversations from the database
        const conversations = await db.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUserPrisma.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        })

        // Return the fetched conversations
        return conversations
    } catch (error: any) {
        // If an error occurs, log the error and return an empty array
        console.log(error)
        return []
    }
}

export default getConversations
