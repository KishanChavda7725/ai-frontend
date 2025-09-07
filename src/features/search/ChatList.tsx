import { useState } from 'react';
import { getAllChat } from './api';
import { ChatResult } from '@/interface/search.interface';
import { Edit } from 'lucide-react';
import { useEffect } from 'react';

export default function ChatList() {
  const [chatList, setChatList] = useState<ChatResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch chat list on mount
  useEffect(() => {
    const fetchChats = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAllChat();
        if (res?.data) {
          setChatList(res.data || []);
        } else {
          setError('Failed to load chats.');
        }
      } catch (err) {
        setError('Failed to load chats.');
      } finally {
        setLoading(false);
      }
    };
    fetchChats();
  }, []);
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
          <div className="px-4 py-3 flex items-center gap-2 text-zinc-700 font-medium cursor-pointer hover:bg-gray-50 rounded-lg">
            <Edit className="w-4 h-4" />
            <span>New Chat</span>
          </div>
          <div className="px-4 mt-3 text-sm text-gray-500 font-medium">Chats</div>
          <div className="mt-1 flex-1 overflow-y-auto">
            {chatList.map((chat, idx) => (
              <button
                key={chat._id || idx}
                className={`w-full text-left px-4 py-2 text-sm truncate text-gray-700 hover:bg-gray-50`}
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
}
