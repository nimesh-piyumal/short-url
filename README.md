
# URL Shortener with Next.js, MongoDB, and Tailwind CSS

This project is a simple URL shortener built with **Next.js**, **MongoDB**, and **Tailwind CSS**. Users can input a long URL and get a shortened version that redirects to the original URL.

## Features

- URL shortening functionality.
- Redirection to the original URL.
- Simple and clean UI built with Tailwind CSS.
- MongoDB for storing shortened URLs and original URLs.

## Tech Stack

- **Frontend**: React (Next.js), Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB
- **Deployment**: Vercel (or any other platform)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or use MongoDB Atlas)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/nimesh-piyumal/short-url.git
cd short-url
```

2. Install the dependencies:

```javascript
npm install
```

3. Create a .env.local file in the root of the project and add the following environment variables:

```javascript
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:

```bash
npm run dev
```

5.  Open your browser and go to http://localhost:3000. You should see the URL shortener app.
    

### API Endpoints

*   **POST /api/shorten**: Accepts a long URL and returns a shortened version.
    
    *   Request body: { "originalUrl": "https://example.com" }
        
    *   Response body: { "shortened": "shortened-string" }
        
*   **GET /api/\[shortened\]**: Redirects to the original URL for the given shortened string.
    
    *   Example: http://localhost:3000/api/s1mwwp will redirect to the original URL.
        

### UI

The frontend provides a form where you can input a long URL, and it will display the shortened version along with a clickable link.

### Tailwind CSS

Tailwind CSS is used for styling the frontend. The UI is designed to be responsive and user-friendly. For customization, you can modify the Tailwind config or the component classes.

Deployment
----------

You can deploy the app to platforms like **Vercel** or **Netlify**. Here's how to deploy to Vercel:

1.  Push your code to GitHub (or any other Git provider).
    
2.  Go to [Vercel](https://vercel.com/) and create a new project.
    
3.  Link your GitHub repository to Vercel.
    
4.  Configure environment variables in the Vercel dashboard (same as .env.local).
    
5.  Deploy your app!
    

Contributing
------------

Feel free to fork the repository and submit issues or pull requests. Any contributions are welcome!

License
-------

This project is licensed under the MIT License - see the [LICENSE](/blob/main/LICENSE) file for details.