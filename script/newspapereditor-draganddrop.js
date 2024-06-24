document.addEventListener('DOMContentLoaded', function() {
    const editorContainer = document.getElementById('editor-container');

    editorContainer.innerHTML = `
        <div class="draggable" draggable="true" id="text-element">Text</div>
        <div class="draggable" draggable="true" id="image-element">Image</div>
        <div class="draggable" draggable="true" id="video-element">Video</div>
        <div id="drop-zone">Drop elements here</div>
    `;

    const draggables = document.querySelectorAll('.draggable');
    const dropZone = document.getElementById('drop-zone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', draggable.id);
        });
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id).cloneNode(true);
        dropZone.appendChild(element);
    });
});
