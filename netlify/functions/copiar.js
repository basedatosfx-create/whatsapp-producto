exports.handler = async (event) => {
  const { img, nombre, codigo, precio } = event.queryStringParameters;
  const mensaje = `${img}\n━━━━━━━━━━━━━━━━━━━━\n🏷️ *Artículo:* ${nombre}\n🔢 *Código:* ${codigo}\n💰 *Precio:* ${precio}\n━━━━━━━━━━━━━━━━━━━━`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial; padding: 20px; background: #f0f0f0; }
    .card { background: white; border-radius: 10px; padding: 20px; }
    img { width: 100%; border-radius: 8px; margin-bottom: 15px; }
    pre { white-space: pre-wrap; font-size: 14px; }
    button { 
      width: 100%; padding: 15px; background: #25D366; 
      color: white; border: none; border-radius: 8px; 
      font-size: 16px; margin-top: 15px; cursor: pointer;
    }
    .copiado { background: #128C7E !important; }
  </style>
</head>
<body>
  <div class="card">
    <img src="${img}">
    <pre id="mensaje">${mensaje}</pre>
    <button onclick="copiar()">📋 Copiar Mensaje</button>
  </div>
  <script>
    function copiar() {
      navigator.clipboard.writeText(document.getElementById('mensaje').innerText);
      document.querySelector('button').textContent = '✅ Copiado!';
      document.querySelector('button').classList.add('copiado');
    }
  </script>
</body>
</html>`
  };
};
