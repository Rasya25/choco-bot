/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // AMBIL DI LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Keqing-MD'
global.namaowner = 'choco'
global.wagc = "-"

//—————「 Setting Owner 」—————//
global.owner = ['6285791346128']
global.nomerowner = '+62 857-9134-6128'
global.premium = ['6285791346128']

//—————「 Set Donate 」—————//
global.dana = '085791346128'
global.pulsa1 = '-'
//—————「 Set Wm 」—————//
global.packname = 'Keqing-MD'
global.author = 'By choco'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 3k Permanen* 😋\n\n🍂 *Subscribe Channel Owner Pakai 10 Akun Gratis Premium Bot (Sertakan Bukti)* ❗',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/bcb6c6bfa6dcb7c87bd78.jpg'
global.link = 'https://github.com/Rasya25'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
