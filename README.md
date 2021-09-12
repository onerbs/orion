# :milky_way: Orion

Fetch, display and filter users.

> This is an exercise project.


## Getting Started

Make sure you have `docker` and `docker-compose` installed on your machine and run:

	docker-compose up


You can also run each project without Docker. `cd` into the project folder and run:

	npm run dev


The backend will use the port `2500`

	curl http://localhost:2500/api/users
	curl http://localhost:2500/api/attrs


The frontend will use the port `3500`

	$BROWSER http://localhost:3500


## Technologies

Backend

- [NodeJS](https://nodejs.org)
- [express](https://expressjs.com)


Frontend

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
