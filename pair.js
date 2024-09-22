const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Dark_Shadow_Modz,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SUPUN_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Dark_Shadow_Modz = Dark_Shadow_Modz({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Dark_Shadow_Modz.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Dark_Shadow_Modz.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Dark_Shadow_Modz.ev.on('creds.update', saveCreds)
            Pair_Code_By_Dark_Shadow_Modz.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Dark_Shadow_Modz.sendMessage(Pair_Code_By_Dark_Shadow_Modz.user.id, { text: '' + b64data });

               let SUPUN_MD_TEXT = `
 ┏━━━━━━━━━━━━━━━━━━━━━━┓
 ┃  *BOT SESSION SUCCESS*       ┃
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
 await Pair_Code_By_Dark_Shadow_Modz.sendMessage(Pair_Code_By_Dark_Shadow_Modz.user.id,{text:SUPUN_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Dark_Shadow_Modz.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SUPUN_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SUPUN_MD_PAIR_CODE()
});
module.exports = router
