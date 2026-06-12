/* Single source of truth for project content — used by index.html (modal) and case.html (full page). */
window.PROJECT_ORDER = ['dex','wallstudio','magnify','pathmap'];

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
  }
};
