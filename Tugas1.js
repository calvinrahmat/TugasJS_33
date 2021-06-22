const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
			let cek = dataDay.find((item) => {
				return item === day;
		
			});
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error('Hari ini bukan hari kerja'));
			}
		}, 3000);
	});
};

//Method then() mengembalikan Promise dan menggunakan dua argumen: fungsi callback untuk kasus sukses dan gagal pada Promise. catch berfungsi untuk menghandle error
cekHariKerja('sabtu')
	.then((message) => {
		console.log(`resolve inside THEN: hari ${message} hari kerja`);
	})
	.catch((error) => {
		console.log('error inside THEN: '+error.message);
	});

//try berfungsi untuk menentukan blok kode yang akan diuji dan mengecek error ketika dieksekusi. catch berfungsi untuk menghandle error
const cekTry = async () =>{
try{
const hariKerja = await cekHariKerja('sabtu')
console.log(`cek TRY: hari ${hariKerja} hari kerja`)
	
} catch (error) {
	console.log('error inside TRY: '+error.message);
}
}

cekTry()