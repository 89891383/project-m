import { TwitchChatBox, TwitchChatContainer, TwitchChatHolder } from './TwitchChat.styles';

import React from 'react';
import { getTwitchChatParent } from '@/pages/_app';

const TwitchChat = () => {
  return (
    <TwitchChatBox>
      <TwitchChatContainer>
        <TwitchChatHolder
          src={`https://www.twitch.tv/embed/demonzz1/chat?parent=${getTwitchChatParent()}&darkpopout`}
        />
      </TwitchChatContainer>
    </TwitchChatBox>
  );
};

export default TwitchChat;
