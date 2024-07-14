function showReturnSummary(updates) {
    let summary = "Welcome back! Here's a quick summary of what you missed:\n\n";
    updates.forEach(update => {
        summary += `${update.type.toUpperCase()}: ${update.message}\n`;
    });
    alert(summary);
}

showReturnSummary(updates);
