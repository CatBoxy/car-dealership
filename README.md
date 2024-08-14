# Car Dealership

## Overview

Car Dealership is a web application that allows users to search for vehicle models by make and year. The application is built using Next.js with TypeScript for the frontend and uses the vpic.nhtsa.dot.gov public API for vehicle data.

## Architecture

The application follows a client-server architecture:

- Frontend: Next.js with TypeScript
- UI Components: Tailwind CSS and shadcn/ui
- API: External vehicle data API

Key components:

1. `FilterForm`: Handles the selection of vehicle make and year
2. `SearchResults`: Displays the search results for selected make and year
3. `VehicleCard`: Renders individual vehicle details
4. `api.ts`: Contains functions for interacting with the external API

## Running the Application Locally

1. Clone the repository:

```
git clone https://github.com/CatBoxy/car-dealership
```

2. Install dependencies:

```
npm install
```

3. Set up your .env.local:

```
API_BASE_URL=https://vpic.nhtsa.dot.gov
```

4. Run the development server:

```
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Search for vehicle models by make and year
- Display search results in a card-based layout
- Responsive design for mobile and desktop views
- Server-side rendering

## Building for Production

To create a production build, run:

```
npm run build
```

Then, to start the production server:

```
npm start
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
