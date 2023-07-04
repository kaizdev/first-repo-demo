export const createMessage = async (messageData) => {
    const newMessage = { ...messageData, createdAt: new Date() }; // add the date/time for new messages
    // POST request (instead of GET) - this is how we tell it to add to the messages db
    const response = await fetch("http://localhost:3000/messages", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
    });
    if (!response.ok) {
        throw new Error("Failed to create message");
    }

    const message = await response.json();
    return message;
};
