import React from "react"
import {resultMapper} from "../helpers/results"
import Pagination from "./Pagination.jsx"

export default React.createClass(
{
    getInitialState()
    {
        return {
            results: []
        }
    },

    componentDidMount()
    {
        const {page} = this.props.location.query
        this.fetchResults(page)
    },

    componentWillReceiveProps(newProps)
    {
        const {page} = this.props.location.query
        const newPage = newProps.location.query.page

        if(newPage != page)
        {
            this.fetchResults(newPage)
        }
    },

    fetchResults(page = 1)
    {
        const {params, location, fetchItems} = this.props
        const {limit = 5} = location.query

        fetchItems(params.primaryTerm, page, limit)
            .then(items =>
            {
                this.setState({results: resultMapper(items)})
            })
    },

    render()
    {
        const {results} = this.state
        const {location, itemMapper, className} = this.props

        const items = results.map(itemMapper)

        return (
            <div className={className}>
                <Pagination location={location}>
                    { items }
                </Pagination>
            </div>
        )
    }
})