import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchChats } from './chatSlice';
import { clearCurrentChatId, fetchSearchByChatId, setCurrentChatId } from './searchSlice';
import { Edit } from 'lucide-react';

const ChatList = () => {
  const dispatch = useAppDispatch();
  const { chatList, loading, error } = useAppSelector((state) => state.chat);
  const { currentChatId } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  const handleNewChat = () => {
    dispatch(clearCurrentChatId());
  };
  const handleChat = (chatId: string) => {
    dispatch(fetchSearchByChatId(chatId));
    dispatch(setCurrentChatId(chatId));
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <span>Loading chats...</span>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-4">{error}</div>
      ) : chatList && chatList.length ? (
        <div className="text-xs uppercase text-zinc-500 mb-2 px-3">
          <div
            className="px-4 py-3 flex items-center gap-2 text-zinc-700 font-medium cursor-pointer hover:bg-gray-50 rounded-lg"
            onClick={handleNewChat}
          >
            <Edit className="w-4 h-4" />
            <span>New Chat</span>
          </div>
          <div className="px-4 mt-3 text-sm text-gray-500 font-medium">Chats</div>
          <div className="mt-1 flex-1 h-[350px] overflow-y-auto">
            {chatList.map((chat, idx) => (
              <button
                type="button"
                key={chat._id || idx}
                className={`w-full text-left px-3 py-2 text-sm truncate rounded
                  ${
                    currentChatId === chat._id
                      ? 'bg-zinc-100 text-zinc-900'
                      : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                onClick={() => handleChat(chat._id)}
              >
                {chat.name || 'Untitled Chat'}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No chat yet.</p>
      )}
    </>
  );
};

export default ChatList;
