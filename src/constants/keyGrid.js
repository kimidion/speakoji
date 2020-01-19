import { actions } from '../constants/actions';
import { colors } from '../constants/colors';

// bottom row only moves to new pages
// static rightmost column for navigational elements
const clear = { y: 0, x: 11, word: "CLEAR", icon: "clear_all", emoji: "", action: actions.clear, bg: colors.lightgrey };
const back = { y: 1, x: 11, word: "BACK", icon: "settings_backup_restore", emoji: "", action: actions.back, bg: colors.lightgrey };
const pluralize = { y: 2, x: 11, word: "PLURAL", icon: "", emoji: "+s", action: actions.pluralize, bg: colors.lightgrey };
const keyboard = { y: 3, x: 11, word: "QWERTY", icon: "keyboard", emoji: "", action: actions.keyboard, bg: colors.lightgrey };
const expand = { y: 4, x: 11, word: "EXPAND", icon: "filter_frames", emoji: "", action: actions.expand, bg: colors.lightgrey };
const filter =  { y: 5, x: 11, word: "FILTER", icon: "filter_list", emoji: "", action: actions.filter, bg: colors.lightgrey };
const settings = { y: 6, x: 11, word: "SETTINGS", icon: "menu", emoji: "", action: actions.settings, bg: colors.lightgrey };

const row1 = new Array(
    { y: 0, x: 0 },
    { y: 0, x: 1 },
    { y: 0, x: 2 },
    { y: 0, x: 3 },
    { y: 0, x: 4 },
    { y: 0, x: 5 },
    { y: 0, x: 6 },
    { y: 0, x: 7 },
    { y: 0, x: 8 },
    { y: 0, x: 9 },
    { y: 0, x: 10 },
    clear);
const row2 = new Array(
    { y: 1, x: 0 },
    { y: 1, x: 1 },
    { y: 1, x: 2 },
    { y: 1, x: 3 },
    { y: 1, x: 4 },
    { y: 1, x: 5 },
    { y: 1, x: 6 },
    { y: 1, x: 7 },
    { y: 1, x: 8 },
    { y: 1, x: 9 },
    { y: 1, x: 10 },
    back);
const row3 = new Array(
    { y: 2, x: 0 },
    { y: 2, x: 1 },
    { y: 2, x: 2 },
    { y: 2, x: 3 },
    { y: 2, x: 4 },
    { y: 2, x: 5 },
    { y: 2, x: 6 },
    { y: 2, x: 7 },
    { y: 2, x: 8 },
    { y: 2, x: 9 },
    { y: 2, x: 10 },
    keyboard);
const row4 = new Array(
    { y: 3, x: 0 },
    { y: 3, x: 1 },
    { y: 3, x: 2 },
    { y: 3, x: 3 },
    { y: 3, x: 4 },
    { y: 3, x: 5 },
    { y: 3, x: 6 },
    { y: 3, x: 7 },
    { y: 3, x: 8 },
    { y: 3, x: 9 },
    { y: 3, x: 10 },
    pluralize);
const row5 = new Array(
    { y: 4, x: 0 },
    { y: 4, x: 1 },
    { y: 4, x: 2 },
    { y: 4, x: 3 },
    { y: 4, x: 4 },
    { y: 4, x: 5 },
    { y: 4, x: 6 },
    { y: 4, x: 7 },
    { y: 4, x: 8 },
    { y: 4, x: 9 },
    { y: 4, x: 10 },
    expand);
const row6 = new Array(
    { y: 5, x: 0 },
    { y: 5, x: 1 },
    { y: 5, x: 2 },
    { y: 5, x: 3 },
    { y: 5, x: 4 },
    { y: 5, x: 5 },
    { y: 5, x: 6 },
    { y: 5, x: 7 },
    { y: 5, x: 8 },
    { y: 5, x: 9 },
    { y: 5, x: 10 },
    filter);
const row7 = new Array(
    { y: 6, x: 0 },
    { y: 6, x: 1 },
    { y: 6, x: 2 },
    { y: 6, x: 3 },
    { y: 6, x: 4 },
    { y: 6, x: 5 },
    { y: 6, x: 6 },
    { y: 6, x: 7 },
    { y: 6, x: 8 },
    { y: 6, x: 9 },
    { y: 6, x: 10 },
    settings);

export const keyGrid = new Array(row1, row2, row3, row4, row5, row6, row7);