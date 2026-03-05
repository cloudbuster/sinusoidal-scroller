(async () => {
    // ── Fontmap (from 8-color-font.png analysis) ────────────────────────────
    const FONTMAP = {
        source: "8-color-font.png",
        glyph_h: 31,
        glyphs: {
            "A": { x: 1, y: 1, w: 23, h: 31, adv: 24 },
            "B": { x: 25, y: 1, w: 23, h: 31, adv: 24 },
            "C": { x: 49, y: 1, w: 23, h: 31, adv: 24 },
            "D": { x: 73, y: 1, w: 23, h: 31, adv: 24 },
            "E": { x: 97, y: 1, w: 23, h: 31, adv: 24 },
            "F": { x: 121, y: 1, w: 23, h: 31, adv: 24 },
            "G": { x: 145, y: 1, w: 23, h: 31, adv: 24 },
            "H": { x: 169, y: 1, w: 23, h: 31, adv: 24 },
            "I": { x: 193, y: 1, w: 11, h: 31, adv: 12 },
            "J": { x: 1, y: 33, w: 23, h: 31, adv: 24 },
            "K": { x: 25, y: 33, w: 23, h: 31, adv: 24 },
            "L": { x: 49, y: 33, w: 23, h: 31, adv: 24 },
            "M": { x: 73, y: 33, w: 27, h: 31, adv: 28 },
            "N": { x: 101, y: 33, w: 23, h: 31, adv: 24 },
            "O": { x: 125, y: 33, w: 23, h: 31, adv: 24 },
            "P": { x: 149, y: 33, w: 23, h: 31, adv: 24 },
            "Q": { x: 173, y: 33, w: 23, h: 31, adv: 24 },
            "R": { x: 197, y: 33, w: 23, h: 31, adv: 24 },
            "S": { x: 1, y: 65, w: 23, h: 31, adv: 24 },
            "T": { x: 25, y: 65, w: 23, h: 31, adv: 24 },
            "U": { x: 49, y: 65, w: 23, h: 31, adv: 24 },
            "V": { x: 73, y: 65, w: 23, h: 31, adv: 24 },
            "W": { x: 97, y: 65, w: 27, h: 31, adv: 28 },
            "X": { x: 125, y: 65, w: 23, h: 31, adv: 24 },
            "Y": { x: 149, y: 65, w: 23, h: 31, adv: 24 },
            "Z": { x: 173, y: 65, w: 23, h: 31, adv: 24 },
            "1": { x: 197, y: 65, w: 13, h: 31, adv: 14 },
            "2": { x: 1, y: 97, w: 23, h: 31, adv: 24 },
            "3": { x: 25, y: 97, w: 23, h: 31, adv: 24 },
            "4": { x: 49, y: 97, w: 23, h: 31, adv: 24 },
            "5": { x: 73, y: 97, w: 23, h: 31, adv: 24 },
            "6": { x: 97, y: 97, w: 23, h: 31, adv: 24 },
            "7": { x: 121, y: 97, w: 23, h: 31, adv: 24 },
            "8": { x: 145, y: 97, w: 23, h: 31, adv: 24 },
            "9": { x: 169, y: 97, w: 23, h: 31, adv: 24 },
            "0": { x: 193, y: 97, w: 23, h: 31, adv: 24 },
            "(": { x: 1, y: 129, w: 14, h: 31, adv: 15 },
            ")": { x: 16, y: 129, w: 14, h: 31, adv: 15 },
            "*": { x: 31, y: 129, w: 23, h: 31, adv: 24 },
            ".": { x: 55, y: 129, w: 9, h: 31, adv: 10 },
            ",": { x: 65, y: 129, w: 9, h: 31, adv: 10 },
            "!": { x: 75, y: 129, w: 9, h: 31, adv: 10 },
            "?": { x: 85, y: 129, w: 23, h: 31, adv: 26 },
            "'": { x: 109, y: 130, w: 9, h: 31, adv: 10 },
            ":": { x: 119, y: 129, w: 9, h: 31, adv: 10 },
            ";": { x: 129, y: 129, w: 9, h: 31, adv: 10 },
            "-": { x: 139, y: 129, w: 14, h: 31, adv: 15 },
            "+": { x: 155, y: 129, w: 14, h: 31, adv: 15 },
            " ": null,   // space — handled as gap
        }
    };

    const LINES = [
        "         .......... The story of the app. Initially I used Antigravity with Gemini to check if it could create fontmap and glyphs from my 90s Amiga fonts bitmap. It could, although there were some fonts it didn't recognize and some of the blits had to be adjusted and mapped to specific characters. The sinusoidal scroller was first implemented with Python and py-game. In addition to explaining sinusoidan scroller in text, I provided a YouTube video of a sinusoidal scroller. Gemini watched the video, took screenshots, and made the scroller more or less the same as in the video. I wanted to switch to Javascript, and Antigravity + Gemini got it working until I decided I wanted to use webgl via pixijs library (it is still very slow). It took a lot of prompts to get it working and I ran out of credits to Gemini. I continued with Copilot with the default chat credits in VSCode and got it working. I was surprised how autonomous the agentic coding is (which I presume used sub models on the fly). I watched in awe the thinking processes and accepted changes. The last thing I did, was to create a specification .md (to be able to reproduce the app) and to separate the Javascript from the html file. I used qwen3-coder:30b-a3b-q8_0 with claude code in VSCode. It did remove a couple of unused variables. Wrapping up . . . ".toUpperCase(),
    ];

    // ── PixiJS app ──────────────────────────────────────────────────────────
    const app = new PIXI.Application();
    await app.init({
        resizeTo: window,
        backgroundColor: 0x0a0a14,
        antialias: false,          // keep pixel crispness
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
    });
    document.body.appendChild(app.canvas);

    // ── Load sprite sheet ───────────────────────────────────────────────────
    const baseTex = await PIXI.Assets.load('./8-color-font.png');

    // Enable nearest-neighbour sampling so 4× scale stays sharp/pixelated
    baseTex.source.scaleMode = 'nearest';

    // ── Config ────────────────────────────────────────────────────────────────
    const SCROLL_SPEED = 3;       // screen px per frame
    const SPACE_ADV = 14;
    const GLYPH_H = FONTMAP.glyph_h;
    const SCALE = 4;
    const BOB_AMP = 200;      // sine amplitude in screen pixels
    const BOB_FREQ = 0.0035;   // spatial freq (rad / screen px)
    const BOB_SPEED = 0.03535;   // temporal speed (rad / frame)

    // ── Build glyph strip into a RenderTexture ───────────────────────────
    const scrollText = LINES.join("   *   ") + "   *   ";

    function buildTextStrip() {
        const strip = new PIXI.Container();
        let xCursor = 0;
        for (const rawCh of scrollText) {
            const ch = rawCh.toUpperCase();
            const g = FONTMAP.glyphs[ch];

            if (!g || !g.w) {
                xCursor += (g?.adv ?? SPACE_ADV) * SCALE;
                continue;
            }

            // Slice the character geometry into 1px wide vertical strips
            for (let px = 0; px < g.w; px++) {
                // Create a specific texture frame for just this 1px column
                const sliceTex = new PIXI.Texture({
                    source: baseTex.source,
                    frame: new PIXI.Rectangle(g.x + px, g.y, 1, g.h),
                });

                const sp = new PIXI.Sprite(sliceTex);
                sp.scale.set(SCALE);
                sp.x = xCursor + (px * SCALE);
                // Tag the sprite with its local absolute X for wave math
                sp.localX = sp.x;
                strip.addChild(sp);
            }

            xCursor += g.adv * SCALE;
        }
        strip.fullWidth = xCursor;
        return strip;
    }

    const strip1 = buildTextStrip();
    const strip2 = buildTextStrip(); // Duplicate for seamless looping
    const stripW = strip1.fullWidth;

    const scroller = new PIXI.Container();
    scroller.addChild(strip1);
    scroller.addChild(strip2);
    strip2.x = stripW;

    scroller.y = Math.round((app.screen.height - GLYPH_H * SCALE) / 2);
    app.stage.addChild(scroller);

    // ── Ticker ─────────────────────────────────────────────────────────────
    let scrollX = 0;
    let uTime = 0;
    const allSlices = [...strip1.children, ...strip2.children];

    app.ticker.add((ticker) => {
        const dt = ticker.deltaTime;
        scrollX += SCROLL_SPEED * dt;

        if (scrollX >= stripW) {
            scrollX -= stripW;
        }
        scroller.x = -scrollX;

        uTime += BOB_SPEED * dt;

        // Animate each 1px slice's Y position
        for (let i = 0; i < allSlices.length; i++) {
            const sp = allSlices[i];
            const stripX = sp.parent.x;
            const worldX = scroller.x + stripX + sp.localX;

            sp.y = Math.sin(worldX * BOB_FREQ + uTime) * BOB_AMP;
        }
    });

    // Re-center on resize
    window.addEventListener('resize', () => {
        scroller.y = Math.round((app.screen.height - GLYPH_H * SCALE) / 2);
    });

})();
