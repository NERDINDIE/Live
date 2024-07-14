async function submitReport() {
    const reportContent = document.getElementById('reportContent').value;
    const response = await fetch('/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: reportContent })
    });
    const result = await response.json();
    if (result.success) {
        alert('Report submitted successfully.');
    } else {
        alert('Failed to submit report.');
    }
}
