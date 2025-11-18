const express = require("express");
const app = express();

// Halaman utama
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <title>Proyek Cloud - Uji Kompetensi</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 40px;
          }
          .container {
            max-width: 700px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
          }
          h1 {
            margin-top: 0;
            color: #333;
          }
          .tag {
            background: #007bff;
            color: white;
            padding: 4px 10px;
            border-radius: 5px;
            font-size: 12px;
            display: inline-block;
            margin-bottom: 15px;
          }
          ul {
            line-height: 1.7;
          }
          .footer {
            font-size: 13px;
            color: gray;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <span class="tag">Uji Kompetensi Sistem Administrator</span>
          <h1>Proyek Layanan Terintegrasi Cloud</h1>

          <p>Aplikasi ini berjalan di dalam Docker Container pada VPS Anda, 
          dan deployment dilakukan otomatis menggunakan GitHub Actions CI/CD.</p>

          <ul>
            <li>Backend menggunakan Node.js + Express</li>
            <li>Containerization dengan Docker & docker-compose</li>
            <li>Monitoring menggunakan Prometheus & Grafana</li>
            <li>CI/CD otomatis dari GitHub ke VPS</li>
          </ul>

          <div class="footer">
            © 2025 — Sistem Administrator / Proyek Cloud Terintegrasi
          </div>
        </div>
      </body>
    </html>
  `);
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
