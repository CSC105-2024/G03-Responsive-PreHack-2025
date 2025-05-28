## DocOnTime
- - -

### Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
- - -

## Frontend - React
### Tech Stack

- React
- Axios
- React Router DOM
- Tailwind CSS
- Shadcn
- Daisyui
- framer-motion

### Getting Started - React Client

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev:frontend
   ```

3. The client will be running on [http://localhost:5173](http://localhost:5173)

- - -

## Backend - Node.js

### Tech Stack

- Node.js
- hono
- mySQL
- Prisma ORM
- Jose (JWT)

### API Endpoints

| Method 	| Endpoint         	| Description                            	|
|:------:	|------------------	|----------------------------------------	|
| GET    	| `/users`         	| Fetch data of user use auth middleware 	|
| GET    	| `/users/:id`     	| Fetch user by id                       	|
| POST   	| `/users`         	| Create new user                        	|
| POST   	| `/login`         	| Login user                             	|
| POST   	| `/logout`        	| Logout user                            	|
| POST   	| `/refresh`       	| Refresh token                          	|
| GET    	| `/posts`         	| Fetch all posts use find query         	|
| GET    	| `/posts/all`     	| Fetch all poats                        	|
| GET    	| `/posts/doctor/` 	| Fetch posts by doctor id               	|
| DELETE 	| `/posts`         	| Delete post by id                      	|
| GET    	| `/confirms`      	| Fetch Confirm' post                    	|
| POST   	| `/confirms`      	| Create confirm if pantien book         	|


### Getting Started - Node.js Server

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Create a `.env` file and configure the following variables:
   ```
    DATABASE_URL="mysql://user3:VPcyNaUDgJRg@cshackathon.sit.kmutt.ac.th:3306/group3_prehack"
    SHADOW_DATABASE_URL="mysql://user3:VPcyNaUDgJRg@cshackathon.sit.kmutt.ac.th:3306/group3_prehack_shadow"
    JWT_ACCESS_SECRET="key1"
    JWT_REFRESH_SECRET="key2"
   ```

3. Start the development server:
   ```bash
   pnpm run dev:backend
   ```

4. The server will be running on [http://localhost:3000](http://localhost:3000)