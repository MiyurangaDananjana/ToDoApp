class LoginService {

  static globleUrl = "https://localhost:7032"; // Static property to hold the global base URL

  // Method to set the global URL
  static setBaseUrl(url) {
    this.globleUrl = url;
  }

  static async login(userName, password) {
    try {
      const apiUrl = `${this.globleUrl}/api/auth/login-admin`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the token to localStorage

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        return { success: true, data };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message || 'Login failed. Please try again.' };
      }
    } catch (error) {
      console.error(error);
      return { success: false, error: 'An error occurred. Please try again.' };
    }
  }


  // Utility to get the token
  static getToken() {
    return localStorage.getItem('authToken');
  }

  // Utility to remove the token
  static logout() {
    localStorage.removeItem('authToken');
  }

}

export default LoginService;