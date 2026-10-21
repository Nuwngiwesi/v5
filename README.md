# SHAGGY XMD v5

- `/`      Home: live wallpaper, live stats chart, free pairing
- `/pro`   Pro pair page: WhatsApp number + payment slip, slip goes to owner automatically
- Slips are saved in `./slips` and re-sent every 45s if no bot was connected at upload time.

## .env
- `SLIP_RECEIVERS=94713836073,94784224161`  (numbers that receive slips; defaults to OWNER_NUMBERS)
- `PM2_NAME=shaggy-xmd`
- `FFMPEG_PATH=/path/to/ffmpeg` (optional, for .csong visualizer)

## v5 branding
- `LOGO_URL` (pair.js config) = logo used on menu, alive and on every text reply (small logo card).
- `brandcard.js` adds the logo card to text replies. Turn off with `.env` `LOGO_CARD=false`.
