// Function to display the current day, date, and time
function displayDateTime() {
    // Array of days for reference
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get current date and time
    const now = new Date();

    // Get the current day, date, and time components
    const dayName = days[now.getDay()]; // Get day name
    const date = now.getDate(); // Get the day of the month
    const month = now.getMonth() + 1; // Get month (0-based index, so add 1)
    const year = now.getFullYear(); // Get the year
    const hours = now.getHours(); // Get hours
    const minutes = now.getMinutes(); // Get minutes
    const seconds = now.getSeconds(); // Get seconds

    // Format time to be double digits
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Format the date
    const formattedDate = `${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}/${year}`;

    // Display the day, date, and time
    console.log(`Today is: ${dayName}`);
    console.log(`Current date is: ${formattedDate}`);
    console.log(`Current time is: ${formattedTime}`);
}

// Call the function to display the day, date, and time
displayDateTime();
