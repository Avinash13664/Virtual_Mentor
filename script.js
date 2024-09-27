document.getElementById('send-button').addEventListener('click', () => {
    const inputField = document.getElementById('chat-input-field');
    const message = inputField.value.trim();
    
    if (message) {
        // Add message to chat content
        const chatContent = document.getElementById('chat-content');
        const messageElement = document.createElement('div');
        messageElement.className = 'user-message';
        messageElement.innerText = message;
        chatContent.appendChild(messageElement);

        // Add message to chat history
        const historyContent = document.getElementById('history-content');
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerText = message;
        historyContent.appendChild(historyItem);

        // Clear the input field
        inputField.value = '';
        
        // Scroll to the bottom of chat content
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

// Allow pressing "Enter" to send message
document.getElementById('chat-input-field').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('send-button').click();
    }
});
