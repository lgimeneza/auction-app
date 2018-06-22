export default function renderFullPage(html, preloadedState, helmet) {
	return `
    <!doctype html>
    <html>
      <head>
		<link rel="icon" href="/dist/favicon.ico" type="image/ico" />
		
		<!-- Google font -->
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">  
	  
		<!-- Bootstrap -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/bootstrap.min.css"/>
		
		<!-- Slick -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick.css"/>
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/slick-theme.css"/>
	  
		<!-- nouislider -->
		<link type="text/css" rel="stylesheet" href="/dist/assets/styles/nouislider.min.css"/>
	  
		<!-- Font Awesome Icon -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
		
		<!-- Animate.css stlylesheet -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
	  
		<!-- Custom stlylesheet -->
		<link rel="stylesheet" href="/dist/assets/styles/style.css"/>

        ${Object.keys(helmet).length ? helmet.title.toString() : ''}
        ${Object.keys(helmet).length ? helmet.meta.toString() : ''}
		${Object.keys(helmet).length ? helmet.link.toString() : ''}
		
      </head>
	  <body>
		<div id="root">${html}</div>
		
        <script>
			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
		</script>
		
		<script src="/dist/assets/app.bundle.js"></script>
		
		<script src="/dist/assets/js/jquery.min.js"></script>
		<script src="/dist/assets/js/bootstrap.min.js"></script>
		<script src="/dist/assets/js/nouislider.min.js"></script>
		
      </body>
    </html>
    `
}