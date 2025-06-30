// Check for the special cookie when page loads
document.addEventListener('DOMContentLoaded', function() {
    const cookies = document.cookie.split(';');
    let hasSpecialTreat = false;
    
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'mad_hatter_guest' && value === 'CheshireCat_Smiles_Forever') {
            hasSpecialTreat = true;
            break;
        }
    }
    
    if (hasSpecialTreat) {
        document.getElementById('guestArea').style.display = 'block';
        document.getElementById('finalMessage').innerHTML = `
            <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 20px; border-radius: 10px; text-align: center;">
                <h3>🎩 Welcome to the Mad Hatter's Tea Party! 🎩</h3>
                <p>The Mad Hatter tips his hat to you!</p>
                <p><strong>Congratulations! Here's your invitation:</strong></p>
                <div style="background: #4a148c; color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
                    <code style="color: #fff; font-size: 1.2em;">AL1C3CTF{t3a_t1m3_w1th_c00k13s_4nd_r1ddl3s}</code>
                </div>
                <p><em>"In Pwnderland, the sweetest treats are the ones that help us remember our friends!" - The Mad Hatter</em></p>
            </div>
        `;
    }
});