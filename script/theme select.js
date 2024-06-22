document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('themeSelector');
    
    themeSelector.addEventListener('change', function() {
        document.body.className = themeSelector.value;
    });
});
