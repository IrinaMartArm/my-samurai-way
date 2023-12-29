export const required = (value: string) => {
    if(value && value.length > 0) return undefined;
    return 'Field is required!'
}

export const maxLengthCreator = (length: number) => (value: string) => {
    if(value.length > length) return `Max length is ${length} symbols!`
}