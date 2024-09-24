const inputBox = document.getElementById("inputbox"); // Mengambil elemen dengan ID "inputbox" dari HTML dan menyimpannya dalam variabel inputBox
const listContainer = document.getElementById("listcontainer"); // Mengambil elemen dengan ID "listcontainer" dari HTML dan menyimpannya dalam variabel listContainer

function addTask() { // Membuat fungsi addTask
    if (inputBox.value === '') { // Memeriksa apakah inputBox kosong
        alert("you must write something!"); // Jika kosong, tampilkan alert
    } else { // Jika tidak kosong, lanjutkan
        let li = document.createElement("li"); // Membuat elemen <li> baru
        li.innerHTML = inputBox.value; // Menetapkan nilai inputBox sebagai konten <li>
        listContainer.appendChild(li); // Menambahkan elemen <li> ke dalam listContainer
        let span = document.createElement("span"); // Membuat elemen <span> baru
        span.innerHTML = "\u00d7"; // Menambahkan simbol "×" ke dalam elemen <span>
        li.appendChild(span); // Menambahkan elemen <span> ke dalam <li>
    }
    inputBox.value = ""; // Mengosongkan inputBox setelah menambahkan tugas
    saveData(); // Memanggil fungsi saveData untuk menyimpan data ke localStorage
}

listContainer.addEventListener("click", function(e) { // Menambahkan event listener ke listContainer untuk mendeteksi klik
    if (e.target.tagName === "LI") { // Jika elemen yang diklik adalah <li>
        e.target.classList.toggle("check"); // Toggle kelas "check" pada elemen yang diklik
        saveData(); // Memanggil fungsi saveData untuk menyimpan perubahan
    } else if (e.target.tagName === "SPAN") { // Jika elemen yang diklik adalah <span>
        e.target.parentElement.remove(); // Hapus elemen <li> yang berisi <span>
        saveData(); // Memanggil fungsi saveData untuk menyimpan perubahan
    }
}, false);

function saveData() { // Membuat fungsi saveData
    localStorage.setItem("data", listContainer.innerHTML); // Menyimpan konten listContainer ke localStorage dengan kunci "data"
}

function showTask() { // Membuat fungsi showTask
    listContainer.innerHTML = localStorage.getItem("data"); // Mengambil data dari localStorage dan menampilkannya dalam listContainer
}
showTask(); // Memanggil fungsi showTask saat halaman dimuat untuk menampilkan tugas yang tersimpan
