1 npx create-next-app@latest
2 say no to everything it asks (excecpt maybe src if you so choose)
3 read the official docs for routing. Note it's all under 'pages'
4 most of the functionality is similar to React
5 we have a layout component for stuff that is ever present. The docs are good for this too
6 take the time to read [...article_id].js. This is where the unique getServerSideProps is used. We need this to get params. There is a static method, but it's easier to not use that. context is a bit like req from backend
7 Contexts are similar, but we wrap them around the <Component> in the \_app.js file.
8 Links are similar, but are imported from next/link. Also, it's href= instead of to=
9 React stuff comes with next, but you'll still need to npm react-router-dom and axios
