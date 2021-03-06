let soal = [
  { no : 1,
    soal : "2+2x3 = ",
    pilihan : ['12','8','6','10'],
    jawaban : '8'
  },
  { no : 2,
    soal : "Siapakah presiden ke-5 RI?",
    pilihan : ['Bj. Habibie','Abdurrahman Wahid','Megawati Soekarno Putri','S.B.Y'],
    jawaban : 'Megawati Soekarno Putri'
  },
  { no : 3,
    soal : "Apakah sinonim dari mutilasi?",
    pilihan : ['Penggerak','Pendiri','Semangat','Pemotongan'],
    jawaban : 'Pemotongan'
  },
  { no : 4,
    soal : "Jam berapakah lecture pertama di Hacktiv8 dimulai?",
    pilihan : ['9.00','9.10','9.15','9.30'],
    jawaban : '9.15'
  },
  { no : 5,
    soal : "25x4x2/4",
    pilihan : ['50','100','25','200'],
    jawaban : '50'
  },
  { no : 6,
    soal : "Berapakah jumlah provinsi yang ada di Indonesia?",
    pilihan : ['36','32','33','34'],
    jawaban : '34'
  },
  { no : 7,
    soal : "Siapakah pemeran utama dari film 'Petualangan Sherina'?",
    pilihan : ['Triawan munaf','Sherina Munaf','Mang Saswi','Pevita Pearce'],
    jawaban : 'Sherina Munaf'
  },
  { no : 8,
    soal : "Berapakah jumlah bulan yang mengandung huruf 'r'?",
    pilihan : ['8','7','6','9'],
    jawaban : '8'
  },
  { no : 9,
    soal : "Apakah kepanjangan dari EE?",
    pilihan : ['Engineer Empathy','Engineering Empathy','Engineering Education','Engineer Emotional'],
    jawaban : 'Engineering Empathy'
  },
  { no : 10,
    soal : "Sebuah benda dengan massa 2 kg bergerak dengan percepatan 8 m/s2, berapakah gaya yang dihasilkan oleh benda tersebut'?",
    pilihan : ['4 N','6 N','16 N','12 N'],
    jawaban : '16 N'
  },
  { no : 11,
    soal : "Dalam sehari, berapa banyak galon air yang dibutuhkan untuk mengisi dispenser yang di depan wc hakctiv?",
    pilihan : ['3','4','5','6'],
    jawaban : '4'
  },
  { no : 12,
    soal : "Warna baju apa yang selalu dipakai oleh Armedi?",
    pilihan : ['Hitam','Putih','Abu-abu','Biru'],
    jawaban : 'Abu-abu'
  },
  { no : 13,
    soal : "Ada berapakah jumlah portofolio yang harus dikerjakan oleh anak fase 2?",
    pilihan : ['5','6','7','8'],
    jawaban : '6'
  },
  { no : 14,
    soal : "Kosasih memiliki uang sebanyak Rp. 1200, ia membeli permen dengan harga Rp. 400, kembaliannya berapa?",
    pilihan : ['Rp 800','Rp 600','Rp 400','Rp 1000'],
    jawaban : 'Rp 600'
  },
  { no : 15,
    soal : "Pernyataan yang benar mengenai sifat koligatif larutan elektrolit dan nonelektrolit dengan molalitas yang sama adalah?",
    pilihan : [' titik didih larutan elektrolit lebih rendah dibanding larutan nonelektrolit','titik beku larutan elektrolit lebih rendah dibanding larutan nonelektrolit','titik didih larutan elektrolit sama dengan titik didih larutan nonelektrolit','tekanan uap larutan elektrolit lebih tinggi dibandingkan larutan nonelektrolit'],
    jawaban : 'titik beku larutan elektrolit lebih rendah dibanding larutan nonelektrolit'
  },
  { no : 16,
    soal : "Apakah nama lengkap dari Hardim?",
    pilihan : ['Hary Dhimas Prakoso','Hary Dhimas Wahyudiputra','Hary Dhimas Prakasa','Hary Dhimas Sentosa'],
    jawaban : 'Hary Dhimas Prakoso'
  },
  { no : 17,
    soal : "Ada berapakah AC yang nempel di dinding aquarium hacktiv?",
    pilihan : ['3','4','2','10'],
    jawaban : '2'
  },
  { no : 18,
    soal : "Apa warna tempat sampah yang ada di depan mesin kopi?",
    pilihan : ['Hitam','Hijau','Biru','Kuning'],
    jawaban : 'Kuning'
  },
  { no : 19,
    soal : "Apa warna yang muncul di pencetan buat ngebuka pintu aquarium saat pintu aquarium terbuka?",
    pilihan : ['Merah','Biru','Kuning','Hijau'],
    jawaban : 'Merah'
  },
  { no : 20,
    soal : "Apa warna header dan footer di pamflet 'PLEASE WATCH YOUR BELONGING'?",
    pilihan : ['Merah','Biru','Kuning','Hijau'],
    jawaban : 'Merah'
  },
]



let kumpulanSoal = [
  {
    no : 1,
    soal : "2+2x3 = ",
    pilihan : [ {option : '12', value : false},
                {option : '8', value : true},
                {option : '6', value : false},
                {option : '10', value : false}],
  },
  {
    no : 2,
    soal : "Jam berapakah lecture pertama di Hacktiv8 dimulai?",
    pilihan : [ {option : '9.00', value : false},
                {option : '9.10', value : false},
                {option : '9.15', value : true},
                {option : '9.30', value : false}],
  },
  {
    no : 3,
    soal : "25x4x2/4",
    pilihan : [ {option : '50', value : true},
                {option : '100', value : false},
                {option : '25', value : false},
                {option : '200', value : false}],
  },
  {
    no : 4,
    soal : "Siapakah presiden ke-5 RI?",
    pilihan : [ {option : 'Bj. Habibie', value : false},
                {option : 'Abdurrahman Wahid', value : false},
                {option : 'Megawati Soekarno Putri', value : true},
                {option : 'S.B.Y', value : false}],
  },
  {
    no : 5,
    soal : "Apakah sinonim dari mutilasi?",
    pilihan : [ {option : 'Penggerak', value : false},
                {option : 'Pendiri', value : false},
                {option : 'Semangat', value : false},
                {option : 'Pemotongan', value : true}],
  },
  {
    no : 6,
    soal : "Berapakah jumlah provinsi yang ada di Indonesia?",
    pilihan : [ {option : '36', value : false},
                {option : '32', value : false},
                {option : '33', value : false},
                {option : '34', value : true}],
  },
  {
    no : 7,
    soal : "Siapakah pemeran utama dari film 'Petualangan Sherina'?",
    pilihan : [ {option : 'Triawan munaf', value : false},
                {option : 'Sherina Munaf', value : true},
                {option : 'Mang Saswi', value : false},
                {option : 'Pevita Pearce', value : false}],
  },
  {
    no : 8,
    soal : "Berapakah jumlah bulan yang mengandung huruf 'r'?",
    pilihan : [ {option : '8', value : true},
                {option : '7', value : false},
                {option : '6', value : false},
                {option : '9', value : false}],
  },
  {
    no : 9,
    soal : "Apakah kepanjangan dari EE?",
    pilihan : [ {option : 'Engineer Empathy', value : false},
                {option : 'Engineering Empathy', value : true},
                {option : 'Engineering Education', value : false},
                {option : 'Engineer Emotional', value : false}],
  },
  {
    no : 10,
    soal : "Sebuah benda dengan massa 2 kg bergerak dengan percepatan 8 m/s2, berapakah gaya yang dihasilkan oleh benda tersebut'?",
    pilihan : [ {option : '4 N', value : false},
                {option : '6 N', value : false},
                {option : '16 N', value : true},
                {option : '12 N', value : false}],
  },
  {
    no : 11,
    soal : "Dalam sehari, berapa kali galon air dispenser yang di depan wc hacktiv diganti?",
    pilihan : [ {option : '3', value : false},
                {option : '4', value : true},
                {option : '5', value : false},
                {option : '6', value : false}],
  },
  {
    no : 12,
    soal : "Warna baju apa yang selalu dipakai oleh Armedi?",
    pilihan : [ {option : 'Hitam', value : false},
                {option : 'Putih', value : false},
                {option : 'Abu-abu', value : true},
                {option : 'Biru', value : false}],
  },
  {
    no : 13,
    soal : "Ada berapakah jumlah portofolio yang harus dikerjakan oleh anak fase 2?",
    pilihan : [ {option : '5', value : true},
                {option : '6', value : false},
                {option : '7', value :false},
                {option : '8', value : false}],
  },
  {
    no : 14,
    soal : "Kosasih memiliki uang sebanyak Rp. 1200, ia membeli permen dengan harga Rp. 400, kembaliannya berapa?",
    pilihan : [ {option : 'Rp 600', value : true},
                {option : 'Rp 800', value : false},
                {option : 'Rp 400', value : false},
                {option : 'Rp 1000', value : false}],
  },
  {
    no : 15,
    soal : "Pernyataan yang benar mengenai sifat koligatif larutan elektrolit dan nonelektrolit dengan molalitas yang sama adalah?",
    pilihan : [ {option : ' titik didih larutan elektrolit lebih rendah dibanding larutan nonelektrolit', value : false},
                {option : 'titik didih larutan elektrolit sama dengan titik didih larutan nonelektrolit', value : false},
                {option : 'tekanan uap larutan elektrolit lebih tinggi dibandingkan larutan nonelektrolit', value : false},
                {option : 'titik beku larutan elektrolit lebih rendah dibanding larutan nonelektrolit', value : true}],
  },
  {
    no : 16,
    soal : "Apakah nama lengkap dari Hardim?",
    pilihan : [ {option : 'Hary Dhimas Prakoso', value : true},
                {option : 'Hary Dhimas Wahyudiputra', value : false},
                {option : 'Hary Dhimas Silo', value : false},
                {option : 'Hary Dhimas Sentosa', value : false}],
  },
  {
    no : 17,
    soal : "Ada berapakah AC yang nempel di dinding aquarium hacktiv?",
    pilihan : [ {option : '3', value : false},
                {option : '4', value : false},
                {option : '2', value : true},
                {option : '10', value : false}],
  },
  {
    no : 18,
    soal : "Apa warna tempat sampah yang ada di depan mesin kopi?",
    pilihan : [ {option : 'Hitam', value : false},
                {option : 'Hijau', value : false},
                {option : 'Biru', value : false},
                {option : 'Kuning', value : true}],
  },
  {
    no : 19,
    soal : "Apa warna yang muncul di pencetan buat ngebuka pintu aquarium saat pintu aquarium berhasil terbuka?",
    pilihan : [ {option : 'Merah', value : true},
                {option : 'Biru', value : false},
                {option : 'Kuning', value : false},
                {option : 'Hijau', value : false}],
  },
  {
    no : 20,
    soal : "Apa warna header dan footer di pamflet 'PLEASE WATCH YOUR BELONGING'?",
    pilihan : [ {option : 'Merah', value : true},
                {option : 'Biru', value : false},
                {option : 'Kuning', value : true},
                {option : 'Hijau', value : false}],
  }
]