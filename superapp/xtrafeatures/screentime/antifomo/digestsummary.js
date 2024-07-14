function generateDigestSummary(updates) {
    let digest = "Here's what you missed:\n\n";
    updates.forEach(update => {
        digest += `${update.type.toUpperCase()}: ${update.message}\n`;
    });
    return digest;
}

const digestSummary = generateDigestSummary(updates);
console.log(digestSummary);
