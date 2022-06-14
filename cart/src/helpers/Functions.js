export const shorten = (title) => {
    const spliedTitle = title.splite(" ");
    const newTitle = `${spliedTitle[0]} + ${spliedTitle[1]}`;
    return newTitle;
}