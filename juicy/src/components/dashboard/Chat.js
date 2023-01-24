import Talk from 'talkjs';
import axios from '../../api/axios';
import { useEffect, useState, useRef } from 'react';

function MyChatComponent({ user, myUser }) {
    const chatboxEl = useRef();

    // wait for TalkJS to load
    const [talkLoaded, markTalkLoaded] = useState(false);
    const [loggedUser, setLoggedUser] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios(`users/${myUser.id}`);
            setLoggedUser(result.data);
        }
        fetch()
        Talk.ready.then(() => markTalkLoaded(true));

        if (talkLoaded) {
            const otherUser = new Talk.User({
                id: '1',
                name: `Luce`,
                email: 'ante@gmail',
                photoUrl: 'user',
                welcomeMessage: 'Hello!',
                role: 'default',
            });

            const currentUser = new Talk.User({
                id: `${user.id}`,
                name: `${user.name}`,
                email: `${user.email}`,
                photoUrl: 'user',
                welcomeMessage: 'Hello2!',
                role: 'default',
            });

            const session = new Talk.Session({
                appId: 'tzA3WwVo',
                me: otherUser,
            });

            const conversationId = Talk.oneOnOneId(otherUser, currentUser);
            const conversation = session.getOrCreateConversation(conversationId);
            conversation.setParticipant(currentUser);
            conversation.setParticipant(otherUser);

            const chatbox = session.createChatbox();
            chatbox.select(conversation);
            chatbox.mount(chatboxEl.current);

            return () => session.destroy();
        }
    }, [talkLoaded]);

    return <div className='h-full' ref={chatboxEl} />;
}

export default MyChatComponent;