/**
 * Questions and answers for the support page. Every answer restates what
 * the app itself says or does (strings.dart, docs/FEATURES.md,
 * docs/PUBLISH.md) — keep it that way when the app changes.
 */
export interface FaqGroup {
    title: string;
    items: { question: string; answer: string }[];
}

export const FAQ: FaqGroup[] = [
    {
        title: "Getting started",
        items: [
            {
                question: "Which devices does Unspend run on?",
                answer: "iPhone with iOS 16 or later, in portrait and landscape. There is no iPad version. An Android version is in progress.",
            },
            {
                question: "Why does Unspend ask for Screen Time access?",
                answer: "Unspend uses Apple's Screen Time to block the apps you choose — iOS does the blocking, not Unspend. You are asked once, on first use, and your selection never leaves the device.",
            },
            {
                question: "I activated a profile, but nothing is blocked.",
                answer: "Unspend can't block apps until you allow Screen Time access; the dashboard shows a banner while it is missing. If no prompt appears, allow access in Settings › Screen Time. If another app already manages Screen Time on this iPhone, remove its access there first.",
            },
        ],
    },
    {
        title: "Blocking",
        items: [
            {
                question: "How do the rules of a profile combine?",
                answer: "The apps are blocked while any enabled rule says so: inside the schedule window, or until today's tasks are done, or once today's limit is used up. With no rule enabled the profile is manual — blocked from the moment you activate it until you deactivate it.",
            },
            {
                question: "Why can't I change a profile while it is active?",
                answer: "Its rules, apps and tasks are locked while the shield is active. Deactivate the profile to make changes.",
            },
            {
                question: "How many apps can one profile block?",
                answer: "Up to 50 individual apps. Choose whole categories to block more. Websites can be blocked too.",
            },
            {
                question: "Can a schedule run overnight?",
                answer: "Yes, for example from 22:00 to 06:00. A schedule has to be at least 15 minutes long.",
            },
        ],
    },
    {
        title: "Cooldown and PIN",
        items: [
            {
                question: "How do I lift a block?",
                answer: "Deactivating a profile starts a 5-minute cooldown. After it, the PIN is asked for, if one is set. The wait is the point: it is time to reconsider.",
            },
            {
                question: "Who should know the PIN — and what if it is forgotten?",
                answer: "Hand your phone to someone you trust and let them set it, so you can't talk yourself out of a block. The PIN is stored only as a salted hash in the iOS Keychain; nobody, including us, can read, recover or reset it. After several wrong attempts, entering it is locked for a while.",
            },
            {
                question: "Why can't I delete apps while a block is running?",
                answer: "That is uninstall protection: while a profile is active, apps can't be deleted from the iPhone, so removing Unspend is no way around a block. iOS can only lock deleting for all apps at once. You can switch the protection off in Unspend's settings — with the PIN, and the cooldown while a profile is active.",
            },
            {
                question: "Can a block be lifted in the iPhone's own settings?",
                answer: "On your own iPhone, Screen Time access can be switched off in Settings › Screen Time, which lifts every block. To close that door, let your trusted person set a Screen Time passcode there as well. On a child's iPhone, switching it off needs the parent.",
            },
        ],
    },
    {
        title: "A child's iPhone",
        items: [
            {
                question: "How do I set up Unspend on my child's iPhone?",
                answer: "Your child has to be part of your Family Sharing group. On their iPhone, choose “This is my child's iPhone” and approve with your Apple Account; this step needs an internet connection. After that your child can't delete Unspend or switch it off, and only your PIN lifts a block.",
            },
            {
                question: "Unspend says the iPhone isn't set up as a child's device.",
                answer: "Add your child to Family Sharing in the iPhone's Settings, or choose “This is my iPhone” instead.",
            },
        ],
    },
    {
        title: "Privacy and data",
        items: [
            {
                question: "What data does Unspend collect?",
                answer: "None. There are no accounts, no analytics, no ads and no network requests for your data. Profiles, settings and the PIN stay on your device; the list of blocked apps is held by iOS.",
            },
            {
                question: "How do I delete everything?",
                answer: "In the app, open Settings and choose Delete All Data. It removes all profiles, your PIN and all settings, and lifts active shields. While a profile is active, this takes the cooldown and the PIN.",
            },
        ],
    },
];
