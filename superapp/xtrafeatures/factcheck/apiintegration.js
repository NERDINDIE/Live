async function checkFact(text) {
    const response = await fetch('https://api.factchecking.com/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ text })
    });
    const result = await response.json();
    return result;
}

async function verifyPost(postContent) {
    const factCheckResult = await checkFact(postContent);
    if (factCheckResult.isFalse) {
        alert('This post contains false information.');
    } else {
        alert('This post is verified.');
    }
}
