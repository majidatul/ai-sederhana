function sendMessage() {
    const inputBox = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = inputBox.value.trim();

    if (userMessage === '') return;

    // Tampilkan pesan pengguna
    chatBox.innerHTML += `<div><strong>Kamu:</strong> ${userMessage}</div>`;

    // Respon chatbot
    const botResponse = getBotResponse(userMessage.toLowerCase());
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;

    inputBox.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    if (input.includes("halo") || input.includes("hai")) {
        return "haloo jugaa";
    } else if (input.includes("nama kamu siapa")) {
        return "yahh kepooo ya ahahaha";
    } else if (input.includes("yang bener")) {
        return "iyaa maaf akuu ai bot yang bisa membantu kamu sedikit tapi ahaha";
    } else if (input === "udah dulu ya") {
        return "iyaa dahh!";
    } else if (input.includes("makasih ya")) {
        return "Sama-sama! Senang bisa membantu.";
    } else if (input.includes("gimana kabar nya")) {
        return "baik, kamu gimanaa?";
    } else if (input.includes("bisa tolongin gak")) {
        return "Tentu! Apa yang bisa saya bantu?";
    } else if (input.includes("aku ganteng gak") ) {
        return "bangett";
    } else if (input.includes("aku cantik gak") ) {
        return "bangett";
        } else {
            return "Maaf, aku ngga bisa jawab itu.";
    }
}
