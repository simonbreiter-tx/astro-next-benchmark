# Astro vs. Next

A simple comparison between Astro and Next using dynamic endpoints.

## Build and Start

In each folder run `npm install`, then `npm run build` and `npm run start` to start the prod server.

Astro is served on: http://localhost:4321 and Next is served on: http://localhost:3000.

## Dynamic Endpoints

Type a HTTP code to get the explanation, e.g. `http://localhost:4321/418` or `http://localhost:3000/418`.

## Results

Astro:
* Lighthouse Score: 100 
* First Contentful Paint: 0.8 s
* Largest Contentful Paint: 0.8 s
* Total Blocking Time: 0 ms
* Cumulative Layout Shift: 0
* Speed Index: 0.8 s

Next:
* Lighthouse Score: 99
* First Contentful Paint: 0.9 s
* Largest Contentful Paint: 2.0 s
* Total Blocking Time: 0 ms
* Cumulative Layout Shift: 0
* Speed Index: 0.9 s