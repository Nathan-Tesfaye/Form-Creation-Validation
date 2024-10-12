// Define the asynchronous function to fetch user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Select the data container where the API data will be displayed
  const dataContainer = document.getElementById('api-data');

  // Use try-catch for handling errors
  try {
      // Fetch data from the API URL
      const response = await fetch(apiUrl);
      const users = await response.json(); // Convert the response to JSON

      // Clear the loading message
      dataContainer.innerHTML = '';

      // Create a <ul> element to display the list of users
      const userList = document.createElement('ul');

      // Loop through each user in the users array
      users.forEach(user => {
          // Create a <li> element for each user
          const userItem = document.createElement('li');
          // Set the text content of the <li> to the user's name
          userItem.textContent = user.name;
          // Append the <li> to the <ul>
          userList.appendChild(userItem);
      });

      // Append the complete user list to the data container
      dataContainer.appendChild(userList);

  } catch (error) {
      // Clear the data container and display an error message
      dataContainer.innerHTML = 'Failed to load user data.';
  }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchUserData();
});
