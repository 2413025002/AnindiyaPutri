// Menangani pengumpulan tugas
document.getElementById("form-tugas").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];
  
    if (file) {
      // Tampilkan pesan sukses atau info file
      document.getElementById("result").innerHTML = `<p>Tugas berhasil dikirim: ${file.name}</p>`;
    } else {
      document.getElementById("result").innerHTML = "<p>Harap pilih file untuk mengirim tugas.</p>";
    }
  });
  