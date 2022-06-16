const shorten = (title) => {
    const spliedTitle = title.split(" ");
    const newTitle = `${spliedTitle[0]}  ${spliedTitle[1]}`;
    return newTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

export { shorten, isInCart };