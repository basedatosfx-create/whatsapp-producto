exports.handler = async (event) => {
  const { img, nombre, codigo, precio } = event.queryStringParameters;
  const mensaje = `━━━━━━━━━━━━━━━━━━━━\n🏷️ *Artículo:* ${nombre}\n🔢 *Código:* ${codigo}\n💰 *Precio:* ${precio}\n━━━━━━━━━━━━━━━━━━━━`;

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
      width: 100%; padding: 15px;
      color: white; border: none; border-radius: 8px; 
      font-size: 16px; margin-top: 10px; cursor: pointer;
    }
    .btn-img { background: #0078D7; }
    .btn-txt { background: #25D366; }
    .copiado { background: #128C7E !important; }
    .paso { font-weight: bold; color: #555; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="card">
    <img src="${img}">
    <p class="paso">PASO 1 — Copiá el link de la imagen</p>
    <button class="btn-img" onclick="copiarImg()">🖼️ Copiar Link Imagen</button>
    <p class="paso">PASO 2 — Copiá el mensaje</p>
    <pre id="mensaje">${mensaje}</pre>
    <button class="btn-txt" onclick="copiarMsg()">📋 Copiar Mensaje</button>
  </div>
  <script>
    function copiarImg() {
      navigator.clipboard.writeText("${img}");
      document.querySelector('.btn-img').textContent = '✅ Link Copiado!';
      document.querySelector('.btn-img').classList.add('copiado');
    }
    function copiarMsg() {
      navigator.clipboard.writeText(document.getElementById('mensaje').innerText);
      document.querySelector('.btn-txt').textContent = '✅ Mensaje Copiado!';
      document.querySelector('.btn-txt').classList.add('copiado');
    }
  </script>
</body>
</html>`
  };
};
