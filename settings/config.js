const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dapuhy: 'https://dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://dapuhy.xyz': 'Kirbotz123',
}

//Apikey
global.lolkey = 'Atakbotz'
global.dapuh = 'Kirbotz123'

//Owner
global.owner = ['94775792013','94782575993']
global.ownerNumber = ["94775792013@s.whatsapp.net"]
global.nomorowner = 'https://wa.me/94775792013'
global.namaownernya = 'S A T H A N'


//Bot
global.namabotnya = 'S  A  T H  N'
global.region = 'I`m From Sri Lanka'
global.prefa = ['','!','.','#','-','•']
global.sessionName = 'killau'

//Media
global.email = 'vimukthioshada8@gmail.com'
global.group = 'https://wa.me/94775792013'
global.youtube = 'https://wa.me/94775792013'
global.website = 'https://wa.me/94775792013'
global.github = 'https://wa.me/94775792013'


//Packname
global.packname = '© S A T H A N\nI`m From Sri Lanka'
global.author = 'Wa : 94775792013\nS A T H A N'

//Message
global.krmd = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```'
}

//Keperluan Button img 
global.thumb = fs.readFileSync('./image/image/thumb.jpg')
global.imagekir = fs.readFileSync('./Image/image/logo.jpg')
global.videokir = fs.readFileSync('./image/image/all.mp4')

//Console Log
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})