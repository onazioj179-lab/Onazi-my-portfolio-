/* Single source of truth for project content — used by index.html (modal) and case.html (full page). */
window.PROJECT_ORDER = ['dex','wallstudio','magnify','pathmap','aurum'];

window.PROJECTS = {
  dex: {
    idx:'01', title:'DEX', role:'Cross-platform desktop control hub',
    tag:'Desktop / Native', status:'Shipped',
    summary:'A personal control hub built as a semi-OS — 20+ inner apps, a gaming platform, file transfer and automation, on a Rust native core.',
    body:[
      'DEX is a personal control hub built as a semi-OS: 20+ inner apps, a gaming platform, file transfer, and automation, sitting on a Rust native core that replaces JavaScript for performance-critical systems.',
      'It ships with the Vinx video editor and a cloud-backed update distribution model. Phantom Mode and Xenon Reallocation give fine-grained control over how the system uses resources.'
    ],
    features:['Rust Core','Electron','20+ Inner Apps','Vinx Editor','Phantom Mode','Xenon Reallocation'],
    access:{ label:'Access', value:'Private project — a live walkthrough is available on request.' },
    link:null
  },
  wallstudio: {
    idx:'02', title:'Wall Studio', role:'iOS street-art drawing app',
    tag:'iOS / Creative', status:'Shipped',
    summary:'A professional-grade iOS drawing app built end-to-end in React JSX, with a custom brush engine and full layer management.',
    body:[
      'Wall Studio is a professional-grade iOS drawing app, built end-to-end in React JSX. The custom brush engine ships with an 8-preset library, a stabilizer, and pressure curves.',
      'It includes a reference layer, full layer management, color history, aspect-ratio overlays, thumbnail undo history, complete auto-save, and PNG / JPEG / transparent export.'
    ],
    features:['React JSX','Canvas API','Brush Engine','Layer Management','Pressure Curves','Transparent Export'],
    access:{ label:'Access', value:'Demo available on request.' },
    link:null
  },
  magnify: {
    idx:'03', title:'Magnify', role:'Live System Monitor · Privacy Scanner · Workspace',
    tag:'Desktop / Security', status:'Coming Soon',
    summary:'A live system monitor, privacy scanner, and visual workspace for understanding your digital environment — all from real, on-device data.',
    body:[
      'Magnify watches your system live: real CPU, memory, network and running programs on one screen, in plain language. It scores every process and flags spyware, stalkerware, and connections to known bad servers.',
      'It checks your privacy — trackers, fingerprinting, and risky permissions (camera, microphone, location) — scanned right in the app, with clear do-this-next guidance.',
      'The Workspace maps how things connect: open any folder and Magnify turns it into a living map of how your files, documents, media and configs relate. See what changed, what matters, and what a change would affect — search everything, compare folders, and pin findings into saved investigations.',
      'No fake data: everything you see is real and from your own device. If a signal isn’t available, Magnify says so instead of guessing.'
    ],
    features:['System Monitor','Privacy Scanner','Process Scoring','Spyware / Stalkerware Detection','Workspace Mapping','100% On-Device'],
    access:{ label:'Download', value:'Early Windows build (v0.8.2, x64) available now. Full GitHub release coming soon. Created by Onazi Treasure OJ · © 2026 · Proprietary.' },
    gallery:[
      { src:'assets/magnify/overview.png',    label:'Overview — live system dashboard, scan & report' },
      { src:'assets/magnify/observatory.png', label:'Observatory — environment & knowledge health' },
      { src:'assets/magnify/privacy.png',     label:'Privacy — risk score, permissions & trackers' },
      { src:'assets/magnify/priorities.png',  label:'Priorities — findings graph & impact ranking' }
    ],
    link:{ href:'https://github.com/onazioj179-lab/dex-updates/releases/download/magnify-v0.8.2/Magnify_0.8.2_x64-setup.exe', label:'Download Magnify 0.8.2 · Windows x64' }
  },
  pathmap: {
    idx:'04', title:'PathMap', role:'Encrypted real-time location for private teams',
    tag:'Web / Security', status:'Commercial',
    summary:'A proprietary commercial location-tracking platform where the server only ever sees ciphertext — end-to-end encrypted by design.',
    body:[
      'PathMap is a proprietary commercial location-tracking platform for operations teams, private fleets, and regulated deployments.',
      'Device locations are end-to-end encrypted so the server only ever sees ciphertext — AES-256-GCM with X25519 key exchange and rotating session keys. Offline routing runs on A* / Dijkstra, with geofencing and a Ghost Mode for privacy.'
    ],
    features:['TypeScript','Python','End-to-End Encryption','Offline Routing (A* / Dijkstra)','Geofencing','Ghost Mode'],
    access:{ label:'Repository', value:'github.com/onazioj179-lab/pathmap' },
    link:{ href:'https://github.com/onazioj179-lab/pathmap', label:'github / pathmap' }
  },
  aurum: {
    idx:'05', title:'Aurum', role:'Multiband saturation & mastering plugin',
    tag:'Audio / Plugin', status:'Available',
    summary:'A mastering-grade multiband saturator: drive four bands independently through tape, tube and transformer models, with one-dial character glue, full metering, and real source separation.',
    body:[
      'Aurum is a multiband saturation and mastering plugin. Drive any of four bands — LOW, LOW-MID, HI-MID, HIGH — independently through TAPE, TUBE or TRANSFORMER models. It stays transparent until you turn a knob.',
      'Character is one dial for compression and makeup glue. Every band has voicing, solo and mute; plus high-pass / low-pass, stereo imaging (Mid / Side / Stereo / M+S), linear bypass, and output trim.',
      'Metering covers short and integrated LUFS, peak and RMS, a loudness-target guide (Club / Stream / Apple / EBU), and a frequency-coloured spectrum. Key and BPM are estimated automatically when you load a track. Presets — factory and your own — save to disk and import/export as .json, with undo/redo and a recallable master history.',
      'Export masters to WAV (16 / 24 / 32-bit, optional normalise), band stems (SUB / LOW / MID / HIGH), or separate into KICK / DRUMS / BASS / MELODY. Separation uses real HPSS — harmonic/percussive source separation by spectrogram median-filtering — pulling drums apart from melodic, tonal content, then splitting each by frequency.'
    ],
    features:['4-Band Saturation','Tape / Tube / Transformer','Character Glue','LUFS Metering','HPSS Stem Separation','Key + BPM Detect','Mid / Side Imaging','WAV / Stem Export'],
    access:{ label:'Download', value:'Aurum 1.4.0 for Windows (x64) — available now. Created by Onazi Treasure OJ · © 2026 · Proprietary.' },
    gallery:[
      { src:'assets/aurum/aurum.png',  label:'Aurum — four-band saturation, character & mastering metering' },
      { src:'assets/aurum/aurum2.png', label:'Aurum — Stems view: live waveform, analog drive & loudness targeting' }
    ],
    link:{ href:'https://github.com/onazioj179-lab/TOOLS-REPO/releases/download/aurum-v1.4.0/AURUM-Setup-1.4.0-x64.exe', label:'Download Aurum 1.4.0 · Windows x64' }
  }
};
