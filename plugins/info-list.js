let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed SAIFUL-BOTS' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "ଘ 💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: '╰►Developer SAIFUL-BOTS' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support SAIFUL-BOTS Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K SAIFUL-BOTS' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed SAIFUL-BOTS' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa SAIFUL-BOTS' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur SAIFUL-BOTS' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi SAIFUL-BOTS' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi SAIFUL-BOTS' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa SAIFUL-BOTS' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi SAIFUL-BOTS' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi SAIFUL-BOTS' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa SAIFUL-BOTS' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: '╰►Speed SAIFUL-BOTS' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: '╰►Sistem SAIFUL-BOTS' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler