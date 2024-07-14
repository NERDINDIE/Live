async function flagContent(contentId, reason) {
    const response = await fetch(`/flag/${contentId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason })
    });
    const result = await response.json();
    if (result.success) {
        alert('Content flagged for review.');
    } else {
        alert('Failed to flag content.');
    }
}
