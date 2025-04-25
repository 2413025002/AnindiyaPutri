<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tugas Grafika Komputer PTI - Anindiya Putri</title>
    <style>
        /* Reset dan dasar */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #bc26ab;
            color: #fff;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        header {
            background-color: #8e1e8e;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }
        header h1 {
            font-size: 2rem;
            letter-spacing: 1px;
        }
        nav {
            background-color: #a93ac3;
            padding: 15px 0;
            text-align: center;
            box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2);
        }
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: #ffd700;
        }
        main {
            flex: 1;
            max-width: 900px;
            margin: 30px auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 8px 15px rgba(0,0,0,0.3);
        }
        section p {
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        section a {
            display: inline-block;
            margin: 5px 15px 5px 0;
            padding: 8px 15px;
            background-color: #8e1e8e;
            color: #fff;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.3s ease;
        }
        section a:hover {
            background-color: #5a0f5a;
        }
        /* Foto profil */
        .profile-container {
            text-align: center;
            margin-bottom: 30px;
        }
        .profile-container img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            border: 4px solid #ffd700;
            object-fit: cover;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .profile-container h2 {
            margin-top: 15px;
            font-size: 1.8rem;
            font-weight: 700;
            color: #ffd700;
        }
        footer {
            background-color: #8e1e8e;
            color: #fff;
            text-align: center;
            padding: 12px 0;
            font-size: 0.9rem;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.3);
        }
        /* Responsif */
        @media (max-width: 600px) {
            nav ul {
                flex-direction: column;
                gap: 15px;
            }
            main {
                margin: 20px 15px;
                padding: 20px;
            }
            section a {
                margin-bottom: 10px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Grafika Komputer Anindiya Putri | 2413025002</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Profil</a></li>
            <li><a href="#">Tentang</a></li>
        </ul>
    </nav>

    <main>
        <div class="profile-container">
            <!-- Ganti src dengan alamat foto Anda -->
            <img src="BGS09900 copy.jpg" alt="Foto Anindiya Putri" />
            <h2>Anindiya Putri</h2>
        </div>

        <section>
            <p><strong>Tugas 1|Tokoh Grafika Komputer</strong><br>
                <a href="https://drive.google.com/file/d/1qbQG2xHbZ6XPH8jWV4DaW71ezxhmSrkU/view?usp=drive_link">Hasil</a>
                <a href="https://drive.google.com/file/d/1i4jnugxhAf-PE9cjwi364J2XJp3mOnoR/view?usp=drive_link">PPT</a>
                <a href="https://drive.google.com/drive/folders/1P0F4l3BatDC753QAnYHQUUI53NdUXbTF">Video</a>
            </p>

            <p><strong>Tugas 2|Membuat Garis DDA</strong><br>
                <a href="https://drive.google.com/file/d/14VR4S7OH2F3hcAhq26TXJx-TeU3nTJPD/view?usp=drive_link">Hasil</a>
                <a href="https://drive.google.com/file/d/1bLNmCPjm8v6JbCXmAjdZDOcrn9h-prlO/view?usp=drive_link">Kode</a>
                <a href="https://drive.google.com/file/d/1NO2jWjXAldKIVV83UdyrimbdlgMNxQHE/view?usp=drivesdk">Video</a>
            </p>

            <p><strong>Tugas 3|Membuat Lingkaran Brasenham dan Midpoint</strong><br>
                <a href="https://drive.google.com/file/d/1FijS8067Op5TO821TbfmTEgKUGjy3tRU/view?usp=drive_link">Hasil</a>
                <a href="https://drive.google.com/file/d/1djiVIhkylOICLpbI8FiNGNohID7CNroF/view?usp=drive_link">Kode</a>
                <a href="https://drive.google.com/file/d/1--LknU5bagSu2lbhAbSspBzCCRm8MyiD/view?usp=drivesdk">Video</a>
            </p>

            <p><strong>Tugas 4|Membuat Kurva Bezier</strong><br>
                <a href="https://drive.google.com/file/d/1kZ4LV3EjSGVXfaPBcIdh65ZRlobUXi_I/view?usp=drive_link">Hasil</a>
                <a href="https://drive.google.com/file/d/1egCj7OBKCiwcQm0s96H8_0AJVTl1oFLo/view?usp=drive_link">Kode</a>
                <a href="https://drive.google.com/file/d/1Wf0SRzF0sZGThe8F0AHDq0rG-tTvh8Hn/view?usp=drivesdk">Video</a>
            </p>
        </section>
    </main>

    <footer>
        <p>Hak Cipta &copy; 2025 Anindiya Putri</p>
    </footer>
</body>
</html>

