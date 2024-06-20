document.addEventListener('DOMContentLoaded', (event) => {
    // Get the current date
    const currentDate = new Date();
    
    // Format the date (optional, for better readability)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    
    // Display the date in the HTML
    document.getElementById('dateDisplay').textContent = formattedDate;
});
