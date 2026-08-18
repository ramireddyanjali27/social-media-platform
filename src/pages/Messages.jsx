
import { useState } from "react";

import {
    FaSearch,
    FaPaperclip,
    FaSmile,
    FaPaperPlane,
    FaArrowLeft,
    FaCopy,
    FaTrash,
    FaCheckDouble,
    FaEllipsisV,
    FaTimes,
} from "react-icons/fa";

import "./Messages.css";

function Messages() {

    // =========================================
    // SEARCH
    // =========================================

    const [search, setSearch] = useState("");

    // =========================================
    // MESSAGE INPUT
    // =========================================

    const [message, setMessage] = useState("");

    // =========================================
    // ATTACHMENT MENU
    // =========================================

    const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);

    // =========================================
    // MOBILE CHAT VIEW
    // =========================================

    const [mobileChatOpen, setMobileChatOpen] = useState(false);

    // =========================================
    // CHATS
    // =========================================

    const [chats, setChats] = useState([
        {
            id: 1,
            name: "Anjali Sharma",
            avatar: "AS",
            lastMessage: "Hey! How are you?",
            time: "10:30 AM",
            unread: 2,
            online: true,
        },
        {
            id: 2,
            name: "Rahul Kumar",
            avatar: "RK",
            lastMessage: "See you tomorrow!",
            time: "9:45 AM",
            unread: 0,
            online: true,
        },
        {
            id: 3,
            name: "Priya Reddy",
            avatar: "PR",
            lastMessage: "Thanks for sharing 😊",
            time: "Yesterday",
            unread: 1,
            online: false,
        },
        {
            id: 4,
            name: "SocialConnect Team",
            avatar: "SC",
            lastMessage: "Welcome to SocialConnect!",
            time: "Monday",
            unread: 0,
            online: false,
        },
    ]);

    // =========================================
    // SELECTED CHAT
    // =========================================

    const [selectedChat, setSelectedChat] = useState(chats[0]);

    // =========================================
    // MESSAGES FOR EACH CHAT
    // =========================================

    const [chatMessages, setChatMessages] = useState({

        1: [
            {
                id: 1,
                text: "Hey! How are you?",
                sender: "other",
                time: "10:28 AM",
                read: true,
            },
            {
                id: 2,
                text: "I'm doing great! How about you?",
                sender: "me",
                time: "10:29 AM",
                read: true,
            },
            {
                id: 3,
                text: "I'm good too 😊",
                sender: "other",
                time: "10:30 AM",
                read: true,
            },
        ],

        2: [
            {
                id: 1,
                text: "Hi Rahul!",
                sender: "me",
                time: "9:40 AM",
                read: true,
            },
            {
                id: 2,
                text: "See you tomorrow!",
                sender: "other",
                time: "9:45 AM",
                read: true,
            },
        ],

        3: [
            {
                id: 1,
                text: "Did you see the new post?",
                sender: "me",
                time: "Yesterday",
                read: true,
            },
            {
                id: 2,
                text: "Thanks for sharing 😊",
                sender: "other",
                time: "Yesterday",
                read: true,
            },
        ],

        4: [
            {
                id: 1,
                text: "Welcome to SocialConnect!",
                sender: "other",
                time: "Monday",
                read: true,
            },
        ],
    });

    // =========================================
    // CURRENT CHAT MESSAGES
    // =========================================

    const messages = chatMessages[selectedChat.id] || [];

    // =========================================
    // SEARCH CHATS
    // =========================================

    const filteredChats = chats.filter((chat) =>
        chat.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // =========================================
    // SELECT CHAT
    // =========================================

    const selectChat = (chat) => {

        setSelectedChat(chat);

        setChats((previousChats) =>
            previousChats.map((item) =>
                item.id === chat.id
                    ? {
                        ...item,
                        unread: 0,
                    }
                    : item
            )
        );

        setMobileChatOpen(true);
    };

    // =========================================
    // SEND MESSAGE
    // =========================================

    const sendMessage = () => {

        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return;
        }

        const currentMessages =
            chatMessages[selectedChat.id] || [];

        const newMessage = {
            id: Date.now(),
            text: trimmedMessage,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            read: true,
        };

        setChatMessages({
            ...chatMessages,
            [selectedChat.id]: [
                ...currentMessages,
                newMessage,
            ],
        });

        // Update last message
        setChats((previousChats) =>
            previousChats.map((chat) =>
                chat.id === selectedChat.id
                    ? {
                        ...chat,
                        lastMessage: trimmedMessage,
                        time: newMessage.time,
                    }
                    : chat
            )
        );

        setMessage("");
    };

    // =========================================
    // ENTER TO SEND
    // =========================================

    const handleKeyDown = (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();
            sendMessage();
        }
    };

    // =========================================
    // ADD EMOJI
    // =========================================

    const addEmoji = () => {
        setMessage((previous) =>
            previous + (previous ? " 😊" : "😊")
        );
    };

    // =========================================
    // DELETE MESSAGE
    // =========================================

    const deleteMessage = (messageId) => {

        const updatedMessages =
            messages.filter(
                (msg) => msg.id !== messageId
            );

        setChatMessages({
            ...chatMessages,
            [selectedChat.id]: updatedMessages,
        });

        // Update last message
        const lastMessage =
            updatedMessages[updatedMessages.length - 1];

        setChats((previousChats) =>
            previousChats.map((chat) =>
                chat.id === selectedChat.id
                    ? {
                        ...chat,
                        lastMessage:
                            lastMessage
                                ? lastMessage.text
                                : "No messages yet",
                    }
                    : chat
            )
        );
    };

    // =========================================
    // COPY MESSAGE
    // =========================================

    const copyMessage = async (text) => {

        try {
            await navigator.clipboard.writeText(text);
            alert("Message copied!");
        } catch (error) {
            console.log("Copy failed:", error);
        }
    };

    // =========================================
    // ATTACHMENT
    // =========================================

    const handleAttachment = (type) => {

        setShowAttachmentMenu(false);

        if (type === "photo") {
            alert("Photo attachment selected.");
        }

        if (type === "file") {
            alert("File attachment selected.");
        }
    };

    // =========================================
    // CLOSE MOBILE CHAT
    // =========================================

    const closeMobileChat = () => {
        setMobileChatOpen(false);
    };

    return (

        <div className="messages-page">

            {/* =========================================
                LEFT SIDEBAR
            ========================================= */}

            <div
                className={`chat-sidebar ${
                    mobileChatOpen
                        ? "mobile-hidden"
                        : ""
                }`}
            >

                {/* HEADER */}

                <div className="chat-header">

                    <div>
                        <h2>Messages</h2>

                        <span className="chat-subtitle">
                            Your conversations
                        </span>
                    </div>

                    <span className="total-chats">
                        {chats.length}
                    </span>

                </div>


                {/* SEARCH */}

                <div className="chat-search">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search chats..."
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />

                    {search && (
                        <button
                            className="clear-search"
                            onClick={() => setSearch("")}
                            type="button"
                        >
                            <FaTimes />
                        </button>
                    )}

                </div>


                {/* CHAT LIST */}

                <div className="chat-list">

                    {filteredChats.length === 0 ? (

                        <p className="no-chats">
                            No chats found
                        </p>

                    ) : (

                        filteredChats.map((chat) => (

                            <div
                                key={chat.id}
                                className={
                                    selectedChat.id === chat.id
                                        ? "chat-item selected-chat"
                                        : "chat-item"
                                }
                                onClick={() =>
                                    selectChat(chat)
                                }
                            >

                                {/* AVATAR */}

                                <div className="avatar-container">

                                    <div className="chat-avatar">
                                        {chat.avatar}
                                    </div>

                                    {chat.online && (
                                        <span className="online-dot"></span>
                                    )}

                                </div>


                                {/* CHAT INFO */}

                                <div className="chat-info">

                                    <div className="chat-name-row">

                                        <h4>
                                            {chat.name}
                                        </h4>

                                        <span>
                                            {chat.time}
                                        </span>

                                    </div>


                                    <div className="last-message-row">

                                        <p>
                                            {chat.lastMessage}
                                        </p>

                                        {chat.unread > 0 && (
                                            <span className="unread-count">
                                                {chat.unread}
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>

                        ))
                    )}

                </div>

            </div>


            {/* =========================================
                RIGHT CHAT WINDOW
            ========================================= */}

            <div
                className={`chat-window ${
                    mobileChatOpen
                        ? "mobile-chat-active"
                        : ""
                }`}
            >

                {/* =========================================
                    CONVERSATION HEADER
                ========================================= */}

                <div className="conversation-header">

                    <button
                        className="mobile-back-button"
                        onClick={closeMobileChat}
                        type="button"
                    >
                        <FaArrowLeft />
                    </button>


                    <div className="conversation-user">

                        <div className="conversation-avatar-container">

                            <div className="conversation-avatar">
                                {selectedChat.avatar}
                            </div>

                            {selectedChat.online && (
                                <span className="conversation-online-dot"></span>
                            )}

                        </div>


                        <div>

                            <h3>
                                {selectedChat.name}
                            </h3>

                            <span
                                className={
                                    selectedChat.online
                                        ? "online-status"
                                        : "offline-status"
                                }
                            >
                                {selectedChat.online
                                    ? "Online"
                                    : "Offline"}
                            </span>

                        </div>

                    </div>


                    <button
                        className="conversation-menu"
                        type="button"
                        onClick={() =>
                            alert("More conversation options")
                        }
                    >
                        <FaEllipsisV />
                    </button>

                </div>


                {/* =========================================
                    MESSAGES
                ========================================= */}

                <div className="messages-container">

                    {messages.length === 0 ? (

                        <div className="empty-conversation">

                            <div className="empty-chat-avatar">
                                {selectedChat.avatar}
                            </div>

                            <h3>
                                Start a conversation
                            </h3>

                            <p>
                                Send a message to{" "}
                                {selectedChat.name}
                            </p>

                        </div>

                    ) : (

                        messages.map((msg) => (

                            <div
                                key={msg.id}
                                className={
                                    msg.sender === "me"
                                        ? "message-wrapper my-message"
                                        : "message-wrapper received-message"
                                }
                            >

                                <div className="message-bubble">

                                    <p>
                                        {msg.text}
                                    </p>

                                    <div className="message-meta">

                                        <small>
                                            {msg.time}
                                        </small>

                                        {msg.sender === "me" && (
                                            <FaCheckDouble
                                                className={
                                                    msg.read
                                                        ? "message-read"
                                                        : "message-sent"
                                                }
                                            />
                                        )}

                                    </div>

                                </div>


                                {/* MESSAGE ACTIONS */}

                                <div className="message-actions">

                                    <button
                                        type="button"
                                        title="Copy"
                                        onClick={() =>
                                            copyMessage(msg.text)
                                        }
                                    >
                                        <FaCopy />
                                    </button>


                                    {msg.sender === "me" && (
                                        <button
                                            type="button"
                                            title="Delete"
                                            onClick={() =>
                                                deleteMessage(msg.id)
                                            }
                                        >
                                            <FaTrash />
                                        </button>
                                    )}

                                </div>

                            </div>

                        ))
                    )}

                </div>


                {/* =========================================
                    MESSAGE INPUT
                ========================================= */}

                <div className="message-input-area">

                    {/* ATTACHMENT */}

                    <div className="attachment-wrapper">

                        <button
                            className="message-icon"
                            type="button"
                            onClick={() =>
                                setShowAttachmentMenu(
                                    !showAttachmentMenu
                                )
                            }
                        >
                            <FaPaperclip />
                        </button>


                        {showAttachmentMenu && (

                            <div className="attachment-menu">

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAttachment("photo")
                                    }
                                >
                                    📷 Photo
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleAttachment("file")
                                    }
                                >
                                    📄 File
                                </button>

                            </div>
                        )}

                    </div>


                    {/* EMOJI */}

                    <button
                        className="message-icon"
                        type="button"
                        onClick={addEmoji}
                    >
                        <FaSmile />
                    </button>


                    {/* INPUT */}

                    <input
                        type="text"
                        placeholder={`Message ${selectedChat.name}...`}
                        value={message}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                        onKeyDown={handleKeyDown}
                    />


                    {/* SEND */}

                    <button
                        className="send-button"
                        type="button"
                        onClick={sendMessage}
                        disabled={!message.trim()}
                    >
                        <FaPaperPlane />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Messages;
