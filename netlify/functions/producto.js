exports.handler = async (event) => {
  const { img, nombre, codigo, precio } = event.queryStringParameters;
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="${nombre}">
  <meta property="og:description" content="Código: ${codigo} | ₲ ${precio}">
  <meta property="og:image" content="${img}">
  <meta property="og:type" content="website">
</head>
<body>
  <script>window.location.href = "${img}";</script>
</body>
</html>`
  };
};
