let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} im3 ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Pulsa im3
📞 Nomor: 6285853570297
👤 A/n: Saiful
📝 Mitra: Saiful BOT
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['tri']
handler.tags = ['info']
handler.command = /^(donasitri)$/i
handler.private = true

export default handler