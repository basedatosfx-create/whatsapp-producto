exports.handler = async (event) => {
  const { img } = event.queryStringParameters;
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Producto">
  <meta property="og:image" content="${img}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${img}">
</head>
<body>
  <script>window.location.href = "${img}";</script>
</body>
</html>`
  };
};
