const shorten = (title) => {
    const spliedTitle = title.split(" ");
    const newTitle = `${spliedTitle[0]}  ${spliedTitle[1]}`;
    return newTitle;
}

export { shorten };