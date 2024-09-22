const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Dark_Shadow_Modz,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SUPUN_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Dark_Shadow_Modz = Dark_Shadow_Modz({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Dark_Shadow_Modz.ev.on('creds.update', saveCreds)
			Qr_Code_By_Dark_Shadow_Modz.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Dark_Shadow_Modz.sendMessage(Qr_Code_By_Dark_Shadow_Modz.user.id, { text: '' + b64data });
	
				   let SUPUN_MD_TEXT = ` ┏━━━━━━━━━━━━━━━━━━━━━━┓
  ┃  *BOT SESSION SUCCESS*      ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━┛
╭───────${BOT_NAME}───────●●►
│ *2024 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴 𝚆𝙰 𝙱𝙾𝚃*
│╭────────●●►
││ • *ᴍᴅ ɴᴀᴍᴇ*: *ꜱᴜᴘᴜɴ-ᴍᴅ*
││ • *ᴍᴅ ᴏᴡɴᴇʀ*: *ꜱᴜᴘᴜɴ ꜰᴇʀɴᴀɴᴅᴏ*
││ • *ʏᴛ*: https://youtube.com/@darkshadow_modz
││ • *ᴡᴀ*: https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38
││ • *ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ*
│╰───────────────●●►
│
│*Ragana is a silent character among many characters*
╰─────────────────────●●►
*ꜱᴜᴘᴜɴ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ᴛʜᴇ ᴛᴇᴀᴍ • ᴅᴀʀᴋ ꜱʜᴀᴅᴏᴡ ᴍᴏᴅᴢ*`
	 await Qr_Code_By_Dark_Shadow_Modz.sendMessage(Qr_Code_By_Dark_Shadow_Modz.user.id,{text:SUPUN_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Dark_Shadow_Modz.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SUPUN_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SUPUN_MD_QR_CODE()
});
module.exports = router
