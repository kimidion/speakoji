import { actions } from '../constants/actions';
import { colors } from '../constants/colors';

export const core2 = {
    parent: 'core',
    words: [
        { y: 0, x: 0,  word: "write", icon: "", emoji: "", expand: ["wrote", "writing", "written"] },
        { y: 0, x: 1, word: "day", icon: "", emoji: "" },
        { y: 0, x: 2, word: "could", icon: "", emoji: "" },
        { y: 0, x: 3, word: "", icon: "", emoji: "" },
        { y: 0, x: 4, word: "come", icon: "", emoji: "", expand: ["came", "coming"] },
        { y: 0, x: 5, word: "did", icon: "", emoji: "" },
        { y: 0, x: 6, word: "sound", icon: "", emoji: "", expand: ["sounded", "sounding"] },
        { y: 0, x: 7, word: "no", icon: "", emoji: "" },
        { y: 0, x: 8, word: "most", icon: "", emoji: "" },
        { y: 0, x: 9, word: "", icon: "", emoji: "" },
        { y: 0, x: 10, word: "who", icon: "", emoji: "", expand: ["whom", "whose"] },
        { y: 1, x: 0,  word: "over", icon: "", emoji: "" },
        { y: 1, x: 1,  word: "know", icon: "", emoji: "", expand: ["knew", "knowing"] },
        { y: 1, x: 2,  word: "than", icon: "", emoji: "" },
        { y: 1, x: 3,  word: "call", icon: "", emoji: "", expand: ["called", "calling"] },
        { y: 1, x: 4,  word: "", icon: "", emoji: "" },
        { y: 1, x: 5,  word: "", icon: "", emoji: "" },
        { y: 1, x: 6,  word: "may", icon: "", emoji: "" },
        { y: 1, x: 7,  word: "down", icon: "", emoji: "" },
        { y: 1, x: 8,  word: "side", icon: "", emoji: "" },
        { y: 1, x: 9,  word: "been", icon: "", emoji: "" },
        { y: 1, x: 10, word: "now", icon: "", emoji: "" },
        { y: 2, x: 0,  word: "find", icon: "", emoji: "", expand: ["found", "finding"] },
        { y: 2, x: 1,  word: "any", icon: "", emoji: "" },
        { y: 2, x: 2,  word: "new", icon: "", emoji: "" },
        { y: 2, x: 3,  word: "work", icon: "", emoji: "", expand: ["worked", "working"] },
        { y: 2, x: 4,  word: "part", icon: "", emoji: "", expand: ["parted", "parting"] },
        { y: 2, x: 5,  word: "take", icon: "", emoji: "", expand: ["took", "taking", "taken"] },
        { y: 2, x: 6,  word: "get", icon: "", emoji: "", expand: ["got", "gotten"] },
        { y: 2, x: 7,  word: "", icon: "", emoji: "" },
        { y: 2, x: 8,  word: "", icon: "", emoji: "", },
        { y: 2, x: 9,  word: "live", icon: "", emoji: "", expand: ["lived", "living"] },
        { y: 2, x: 10, word: "where", icon: "", emoji: "" },
        { y: 3, x: 0,  word: "", icon: "", emoji: "" },
        { y: 3, x: 1,  word: "back", icon: "", emoji: "" },
        { y: 3, x: 2,  word: "little", icon: "", emoji: "" },
        { y: 3, x: 3,  word: "only", icon: "", emoji: "" },
        { y: 3, x: 4,  word: "round", icon: "", emoji: "", expand: ["rounded", "rounding"] },
        { y: 3, x: 5,  word: "yes", icon: "", emoji: "" },
        { y: 3, x: 6,  word: "year", icon: "", emoji: "" },
        { y: 3, x: 7,  word: "", icon: "", emoji: "", },
        { y: 3, x: 8,  word: "show", icon: "", emoji: "", expand: ["shown", "showing"] },
        { y: 3, x: 9,  word: "every", icon: "", emoji: "" },
        { y: 3, x: 10, word: "good", icon: "", emoji: "", expand: ["better", "best"] },
        { y: 4, x: 0,  word: "give", icon: "", emoji: "", expand: ["gave", "giving", "given"] },
        { y: 4, x: 1,  word: "under", icon: "", emoji: "" },
        { y: 4, x: 2,  word: "name", icon: "", emoji: "", expand: ["named", "naming"] },
        { y: 4, x: 3,  word: "very", icon: "", emoji: "" },
        { y: 4, x: 4,  word: "through", icon: "", emoji: "" },
        { y: 4, x: 5,  word: "just", icon: "", emoji: "" },
        { y: 4, x: 6,  word: "form", icon: "", emoji: "", expand: ["formed", "forming"] },
        { y: 4, x: 7,  word: "much", icon: "", emoji: "" },
        { y: 4, x: 8,  word: "great", icon: "", emoji: "", expand: ["greater", "greatest"] },
        { y: 4, x: 9,  word: "think", icon: "", emoji: "", expand: ["thought", "thinking"] },
        { y: 4, x: 10, word: "help", icon: "", emoji: "", expand: ["helped", "helping"] },
        { y: 5, x: 0,  word: "low", icon: "", emoji: "", expand: ["lower", "lowest"] },
        { y: 5, x: 1,  word: "line", icon: "", emoji: "", expand: ["lined", "lining"] },
        { y: 5, x: 2,  word: "", icon: "", emoji: "" },
        { y: 5, x: 3,  word: "turn", icon: "", emoji: "", expand: ["turned", "turning"] },
        { y: 5, x: 4,  word: "cause", icon: "", emoji: "", expand: ["caused", "causing"] },
        { y: 5, x: 5,  word: "same", icon: "", emoji: "" },
        { y: 5, x: 6,  word: "mean", icon: "", emoji: "" },
        { y: 5, x: 7,  word: "differ", icon: "", emoji: "", expand: ["differed", "differing", "different"] },
        { y: 5, x: 8,  word: "move", icon: "", emoji: "", expand: ["moved", "moving"] },
        { y: 5, x: 9,  word: "right", icon: "", emoji: "" },
        { y: 5, x: 10, word: "old", icon: "", emoji: "" },
        { y: 6, x: 0,  word: "core", icon: "more_horiz", emoji: "", action: "page" },
        { y: 6, x: 1,  word: "animals", icon: "", emoji: "🐾", action: "page" },
        { y: 6, x: 2,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 3,  word: "plants", icon: "", emoji: "🌿", action: "page" },
        { y: 6, x: 4,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 5,  word: "weather", icon: "", emoji: "", action: "page" },
        { y: 6, x: 6,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 7,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 8,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 9,  word: "", icon: "", emoji: "", action: "page" },
        { y: 6, x: 10, word: "media", icon: "important_devices", action: "page" }, // read, books, watch, tv, phone, device, magazines, movies, shows
    ]
};