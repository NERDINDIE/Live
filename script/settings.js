function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('general').style.display = 'block'; // Show general settings by default
});
