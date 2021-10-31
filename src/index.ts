const sumTwoElements = (elements: number[]): number => {
    return elements.reduce((previousSummedValue, currentElement) => previousSummedValue + currentElement, 0)
}

export default sumTwoElements