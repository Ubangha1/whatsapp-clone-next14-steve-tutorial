"use client"

import { User } from "@prisma/client";
import NewContactSheet from "./sheets/NewContactSheet";
import NewChatSheet from "./sheets/NewChatSheet";


interface DesktopSidebarHeaderProps {
    currentUser: User & {
        following: User[]
    }
}


const DesktopSidebarHeader = ({
    currentUser
}: DesktopSidebarHeaderProps ) => {


    return ( 
        <div>
            <NewContactSheet
                handleAddContact={() => { }}
            />
            <NewChatSheet
                currentUser={currentUser}
            />
        </div>
     );
}
 
export default DesktopSidebarHeader;