document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const listingsLink = document.getElementById('listings-link');
    const loginLink = document.getElementById('login-link');
    const content = document.getElementById('content');
  
    function loadHome() {
      content.innerHTML = `
        <h2>Welcome to the GRIHYA</h2>
        <p>Your one-stop solution for buying and selling properties.</p>
        <button id="myButton">Click me</button>
      `;
    }
  
    function loadListings() {
      content.innerHTML = `
        <h2>Property Listings</h2>
        <ul>
          <li>House 1: 3 bed, 2 bath - $300,000</li>
          <li>House 2: 4 bed, 3 bath - $450,000</li>
          <li>House 3: 2 bed, 1 bath - $200,000</li>
        </ul>
      `;
    }
  
    function loadLogin() {
      content.innerHTML = `
        <h2>Login</h2>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          <br>
          <button type="submit">Login</button>
        </form>
      `;
    }
  
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      loadHome();
    });
  
    listingsLink.addEventListener('click', (e) => {
      e.preventDefault();
      loadListings();
    });
  
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      loadLogin();
    });
  
    // Load home content by default
    loadHome();
  });
  