document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/extensions')
    .then(response => response.json())
    .then(extensions => {
      const extensionsList = document.getElementById('extensions-list');
      extensions.forEach(extension => {
        const extensionElement = document.createElement('div');
        extensionElement.className = 'extension';
        extensionElement.innerHTML = `
          <h2>${extension.name}</h2>
          <p>${extension.description}</p>
          <p><strong>Version:</strong> ${extension.version}</p>
          <p><a href="${extension.url}" target="_blank">Download</a></p>
        `;
        extensionsList.appendChild(extensionElement);
      });
    })
    .catch(error => console.error('Error fetching extensions:', error));
});
