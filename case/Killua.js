require('../settings/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const hxz = require('hxz-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const jimp = require('jimp')
const { color, bgcolor, mycolor } = require('./data/lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./data/lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./data/lib/functions')

module.exports = killua = async (killua, m, chatUpdate, store) => {
try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await killua.decodeJid(killua.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const { chats } = m
        
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await killua.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	
if (!killua.public) {
if (!m.key.fromMe) return
}

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }

if (m.sender.startsWith('212')) return killua.updateBlockStatus(m.sender, 'block')

        const isFoVid = (type === 'imageMessage' || type === 'videoMessage')
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
		
		const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
            return killua.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
            return killua.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
            return killua.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
            return killua.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
            return killua.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
            }
            
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: killua.user.id,
        quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, killua.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
        }
        killua.ev.emit('messages.upsert', msg)
        }
        
        try {
        ppuser = await killua.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnyauser = await getBuffer(ppuser)
        
        const reply = async(teks) => {
		try {
        ppuser = await killua.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        userpp = await getBuffer(ppuser)
        killua.sendMessage(m.chat, { text: teks, contextInfo:{ 
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender], 
        "externalAdReply" : { 
        "title" : `Hallo Kak`, 
        "body" : `Mampir Website Di Bawah Yaa`, 
        "previewType" : "PHOTO", 
        "thumbnailUrl" : ``, 
        "thumbnail" : userpp, 
        "sourceUrl": `wa.me/6285335877178`}}}, 
        { quoted: m })
        }
        
const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}
        
        const fakeYete = async(teks) => {
        killua.sendMessage(m.chat, { text : teks, mentions: await killua.parseMention(teks), contextInfo : {
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender],
        "externalAdReply": {
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnailUrl": "https://telegra.ph/file/90a931648de597820bc08.jpg",
        "previewType": "VIDEO",
        "mediaUrl": `https://Github.com/dd`}}},
        { quoted: m })
        }
        
        const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        async function buttonnya(teks) {
        const buttonsDefault = [{
        urlButton: {
        displayText: 'Group Bot',
        url: `${group}`
        }
        }
        ,
        {
        urlButton: {
        displayText: 'Owner Bot',
        url: `${nomorowner}`
        }
        }]                 
        const buttonMessage = { 
        text: teks, 
        footer: "©V I M U K T H I", 
        templateButtons: buttonsDefault, 
        image: {url: ppnyauser}                                   
        }
        return killua.sendMessage(from, buttonMessage)
        }
        
        function randomNomor(min, max = null) {
        if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
        return Math.floor(Math.random() * min) + 1
        }
        }
        function monospace(string) {
        return '```' + string + '```'
        }
        
switch (command) {
case 'setppbot': {
if (!isCreator) return reply(krmd.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await killua.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await killua.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await killua.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./data/lib/uploader')
let media = await killua.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'emojimix': {
if (!text) return reply(`Example : ${prefix + command} 😅+🤔`)
reply(krmd.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await killua.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'tiktokmp3': case 'audio': {
if (!text) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
reply(krmd.wait)
const memek = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/tiktoknowm?url=${text}=1&apikey=${dapuh}`)
killua.sendMessage(m.chat, { audio: { url: memek.result }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
title: `Hai Kak ${pushname}`,
body: `© Bot WhatsApp 2022`,
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: "https://youtu.be/b0CCKgVEhlk",
sourceUrl: "https://youtu.be/b0CCKgVEhlk"
}}}, { quoted: m })
}
break
case 'nowm': case 'tiktoknowm': {
if (!text) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
reply(krmd.wait)
anu = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/tiktoknowm?url=${text}=1&apikey=${dapuh}`)
let message = await prepareWAMessageMedia({ video : { url: anu.result } }, { upload: killua.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${text}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}audio ${text}` } }]
}
}
}), { userJid: m.chat, quoted: m })
killua.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'yts': case 'ytsearch':
if (args.length < 1) return replyNya(`Contoh:\n${command} bukti Virgoun`)
reply(krmd.wait)
let list_rows = [];
let yts = require("yt-search")
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}play ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create by killua`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        killua.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
case 'play': {
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
reply(krmd.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
🌺 Duration : ${anu.timestamp}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   killua.waUploadToServer })
template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ngen,
hydratedFooterText: `© Bot WhatsApp 2022`,
hydratedButtons: [{
urlButton: {
displayText: 'Link Video',
url: `${anu.url}`
}
}, {
quickReplyButton: {
displayText: 'Audio 128kbps',
id: `ytmp3 ${anu.url} 128kbps`
}
},{quickReplyButton: {
displayText: 'Video 360p',
id: `ytmp4 ${anu.url} 360p`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
killua.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./data/lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
reply(krmd.wait)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
killua.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./data/lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
reply(krmd.wait)
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
killua.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
killua.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
title: `Hai Kak ${pushname}`,
body: `© Bot WhatsApp 2022`,
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: "https://youtu.be/b0CCKgVEhlk",
sourceUrl: "https://youtu.be/b0CCKgVEhlk"
}}}, { quoted: m })
}
break
case 'help': case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
buttonnya(`*BOT WHATSAPP MULTI DEVICE*

STATISTICS BOT
=> Library : Baileys - Multi Device
=> Runtime : ${runtime(process.uptime())}
=> Speed : ${latensi.toFixed(4)} _Detik_
=> Tanggal : ${tanggal}

• ${prefix}creategc
  Contoh : ${prefix}creategc <nama group>

• ${prefix}setppbot
  Contoh : ${prefix}setppbot 'panjang' <reply foto>

• ${prefix}sticker
  Contoh : ${prefix}sticker <reply foto>

• ${prefix}toimg
  Contoh : ${prefix}toimg <reply sticker>

• ${prefix}tourl
  Contoh : ${prefix}tourl <reply foto>

• ${prefix}emojimix
  Contoh : ${prefix}emojimix <😘+😘>

• ${prefix}ytsearch <query>
  Contoh : ${prefix}ytsearch <dandelions>
  
• ${prefix}play <query>
  Contoh : ${prefix}play <link>
  
• ${prefix}ytmp3 <link>
  Contoh : ${prefix}ytmp3 <https://youtu.be/b0CCKgVEhlk>
  
• ${prefix}ytmp4 <link>
  Contoh : ${prefix}ytmp4 <https://youtu.be/b0CCKgVEhlk>
  
• ${prefix}nowm <link>
  Contoh : ${prefix}nowm <https://vt.tiktok.com/ZSdQUPtgy/?k=1>
  
• ${prefix}audio <link>
  Contoh : ${prefix}audio <https://vt.tiktok.com/ZSdQUPtgy/?k=1>

Credits
X None Team
_Script Di Buat Pada_
*Tanggal 14*
*Bulan Mei*
*Hari Minggu*
*Tahun 2022*`)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await killua.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await killua.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'toimg': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Stiker Dengan Caption *${prefix + command}*`)
reply(krmd.wait)
let media = await killua.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
killua.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'creategc': {
if (!isCreator) return reply(krmd.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await killua.groupCreate(args.join(" "), [])
let response = await killua.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
killua.sendMessage(m.chat, { text:teks, mentions: await killua.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(krmd.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(krmd.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return reply(krmd.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(krmd.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})