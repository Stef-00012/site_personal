export const aboutMeText = `
/*
    My personal informations
*/

const personalInfo = {
    firstName: "Stefano",
    lastName: "Del Prete",
    getFullName: function() {
        return \`\${this.firstName} \${this.lastName}\`
    },
    age: undefined, // Not public
    gender: "Male",
    birthday: new Date([[currentTimestamp]]).toLocaleString('it').split(',')[0].replace('[[currentYear]]', '200#'), // aka 15/3/200#
    nationality: "Italian 🇮🇹", // Suca
    status: "[[striketrhoughStart]]Single[[striketrhoughEnd]] [[striketrhoughStart]]Alone... :([[striketrhoughEnd]] Just Want to Die", // how to run "taskkill /f life.exe" for IRL life?
    pets: [{
        type: "rabbit",
        name: "Pallino",
        age: 10 // 75 in rabbit years
    }]
};

/*
    Spoken Languages
*/

const knownLanguages = [
    {
        name: "Italian",
        level: 100 // 0-100 (kinda obv since it's my native lang)
    },
    {
        name: "English",
        level: 95 // 0-100 (this is how I think I am, idk if others think so too)
    },
    {
        name: "French",
        level: 2 // 0-100 (I remember just the basic things)
    }
];

/*
    Programming Languages, Markup Languages and Terminal
*/

const knownProgramming = [
    {
        name: "Javascript", // for the comment on the status value, the question goes also for "fs.unlink('C:\Life.exe')"
        level: 90 // 0-100
    },
    {
        name: "HTML", // for the previous comment, also for "document.getElementById('life').remove()"
        level: 35 // 0-100
    },
    {
        name: "CSS", // also for "#life { display: none; }"
        level: 45 // 0-100
    },
    {
        name: "Bash/Shell", // for "sudo rm -rf --no-preserve-root /life.sh" too
        level: 45 // 0-100
    }
];

/*
    My Apps
*/

const myApps = [
    {
        name: "Zipline Upload",
        description: "A chrome extension that lets users upload right clicked files to their [[aStart_zipline]]Zipline[[aEnd]] instance or shorten URLs with [[aStart_zipline]]Zipline[[aEnd]]",
        url: "[[aStart_ziplineUpload]]https://github.com/Stef-00012/Zipline-Upload-Extension[[aEnd]]"
    },
    {
        name: "User Apps",
        description: "A user-installed Discord bot for some utility commands such as tags (message presets), reminders, ai and more",
        url: "[[aStart_userApps]]https://discord.com/oauth2/authorize?client_id=1223221223685886032[[aEnd]]"
        source: "[[aStart_userAppsSource]]https://github.com/Stef-00012/Discord-User-Installed-Apps[[aEnd]]"
    },
    {
        name: "GattinhosBot",
        serverCount: 23, // Last updated March 4 2024, 21:39 (9:39 PM)
        inviteURL: "[[aStart_inviteUrl]]https://gattinhosbot.is-a.dev/invite[[aEnd]]",
        supportServer: "[[aStart_supportUrl]]https://gattinhosbot.is-a.dev/support[[aEnd]]",
        topGgPage: "[[aStart_topGgUrl]]https://top.gg/bot/1122853658418237520[[aEnd]]",
        website: "[[aStart_websiteUrl]]https://gattinhosbot.is-a.dev[[aEnd]]",
        features: [
            "Welcome System",
            "Reaction Roles System",
            "Leveling System",
            "Logs System"
        ]
    },
    {
        name: "Receiptify",
        description: "Converts your top tracks to a receipt (supports last.fm and spotify)",
        url: "[[aStart_receiptify]]https://receiptify.is-a.dev[[aEnd]]"
    },
    {
        name: "API",
        url: "[[aStart_api]]https://api.stefdp.is-a.dev[[aEnd]]",
        docs: "[[aStart_apiDocs]]https://docs.stefdp.is-a.dev[[aEnd]]",
        endpoints: [ // see docs for more info on each endpoint
            "/gattinhosBot/guilds/:GUILD_ID/features/:FEATURE?/:ID?",
            "/gattinhosBot/guilds/:GUILD_ID/users/:FEATURE?/:ID?",
            "/receiptData/last.fm",
            "/receiptData/spotify"
        ]
    }
]

/*
    Some info about my socials
*/

const discord = {
    botDeveloper: true,
    badges: [
        "House of Bravery",
        "Active Developer",
        "Originally Known as Stef#6705" // Switch from discriminator to pomelo (Stef#6705 => stef_dp)
    ]
};

const instagram = {
    followers: 94 // Last updated March 4 2024, 21:40 (09:40 PM)
};

const revolt = {
    botDeveloper: true, // inactive
    badges: [],
    publicBots: []
};

const github = {
    followers: 9, // Last updated March 4 2024, 21:41 (09:41 PM)
    repositories: 29 // Some are private, last updated March 4 2024, 20:41 (09:41 PM)
};

const reddit = {
    oldAccountKarma: 241,
    newAccountKarma: 13 // Last updated March 4 2024, 21:43 (09:43 PM)
};

const twitter = {
    followers: 13 // Last updated March 4 2024, 21:44 (09:44 PM)
};

/*
    Exports
*/

const socials = {
    instagram,
    discord,
    twitter,
    revolt,
    github,
    reddit
}

module.exports = {
    knownProgramming,
    knownLanguages,
    personalInfo,
    socials,
    myApps
}
`;