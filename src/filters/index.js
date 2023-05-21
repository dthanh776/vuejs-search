// Cắt bớt kí tự
export function truncateWords(str, count) {
    if (!str) {
        return str;
    }
    return str.split(" ").slice(0, count).join(" ");
}
