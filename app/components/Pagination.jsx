import React from "react"
import {browserHistory} from "react-router"

const flattenQuery = query => Object.keys(query).reduce((output, key) =>
{
    const value = `${key}=${query[key]}`;
    return (output != null) ? `${output}&${value}` : value
}, null)

const gotoPage = ({pathname, query}, pageIndexMapper) => event =>
{
    event.preventDefault()

    const {page = 1} = query

    const nextPage = pageIndexMapper(Number(page))
    const queryParams = Object.assign({}, query, {page: nextPage})

    browserHistory.push(`${pathname}?${flattenQuery(queryParams)}`)
}

const PaginationControls = ({location}) =>
(
    <div className="pagination-controls">
        <button className="pagination-button" onClick={gotoPage(location, index => index - 1)}>
            Previous
        </button>
        <button className="pagination-button" onClick={gotoPage(location, index => index + 1)}>
            Next
        </button>
    </div>
)

export default ({children, location}) =>
(
    <div className="pagination">
        <div className="pagination-body">
            { children }
        </div>
        <div className="pagination-footer">
            <PaginationControls location={location}/>
        </div>
    </div>
)