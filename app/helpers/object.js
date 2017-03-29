export const takeLast = (array, count) =>
{
    if(array.length <= count)
    {
        return array
    } else
    {
        return takeLast(array.slice(1), count)
    }
}

const reverse = array =>
{
    if(array.length == 0)
    {
        return []
    } else
    {
        const head = array[0]
        const tail = array.slice(1)

        return reverse(tail).concat(head)
    }
}

