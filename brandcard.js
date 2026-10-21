// 🪪 SHAGGY XMD v5 brand card
// Hama text reply ekakatama logo card ekak (externalAdReply thumbnail) attach karanawa.
// Image / video / poll / react / delete wage ewata kisima wenasak karanne na.

const SKIP_JID = /@(newsletter|broadcast)$|^status@broadcast$/;

export function installBrandCard(socket, getOpts) {
    if (!socket || socket.__brandCard) return;
    const original = socket.sendMessage.bind(socket);

    socket.sendMessage = async (jid, content, options) => {
        try {
            const o = (typeof getOpts === 'function' ? getOpts() : getOpts) || {};
            if (
                o.enabled !== false && o.logo &&
                typeof jid === 'string' && !SKIP_JID.test(jid) &&
                content && typeof content === 'object' &&
                typeof content.text === 'string' && content.text.length > 0 &&
                !content.react && !content.delete && !content.poll &&
                !content.buttons && !content.sections && !content.interactiveButtons &&
                !content.edit
            ) {
                const ci = content.contextInfo || {};
                if (!ci.externalAdReply) {
                    content = {
                        ...content,
                        contextInfo: {
                            ...ci,
                            externalAdReply: {
                                title: o.title || 'SHAGGY XMD v5',
                                body: o.body || 'Powered by Shaggy Tech',
                                thumbnailUrl: o.logo,
                                sourceUrl: o.link || o.logo,
                                mediaType: 1,
                                renderLargerThumbnail: false,
                                showAdAttribution: false
                            }
                        }
                    };
                }
            }
        } catch { /* branding fail unath message eka yanna oni */ }
        return original(jid, content, options);
    };
    socket.__brandCard = true;
}
