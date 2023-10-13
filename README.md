<!-- MPA SPA -->

1. MPAs will have the entire page getting loaded wheares SPAs will have the main page loaded once and then the sub-page sections are changing without a refresh and this is handled by js inside the browser
2. react router + reach router

<!-- defiiing routes - static routes -->

- index.js -> BrowserRouter
- App.js -> Routes -> Route: path + element
- Link -> not reload -> to (a href)
- spa is a smooth transition of pages from link to link

<!-- url & routes -->

- isnt the same
- url: something in the browser
- Routes: the code check the url value and compare with Route -> use the attb. element={} -> render

<!-- dynamic -->

1. app.js -> path='products/:id'
2. products/6 => {id:6}
3. const {id} = usePrams();

<!-- nested routes - <Outlet/> -->

1. route trong route -> outlet
2. context(outlet)
3. useOutletContext hook

<!-- 404 page -->

1. path="\*"

<!-- parent route -->

1. Route '/' > Route x n && Route index
2. index -> point the route to its parent route

<!-- useLocation() -->

1. return the state data insidate the 'location' object
2. location
   - pathname
   - search
   - hash
   - state ->
   - key
