document.addEventListener("DOMContentLoaded", function() {
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdated = new Date(document.lastModified);
    lastUpdatedElement.textContent = `Last updated: ${lastUpdated.toLocaleString()}`;
});
