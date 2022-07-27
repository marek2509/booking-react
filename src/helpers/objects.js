export const ObjectToArrayWithId = obj => {
    const newArray = [];
    for (const key in obj) {
        newArray.push({ ...obj[key], id: key });
    }
    return newArray;
}
