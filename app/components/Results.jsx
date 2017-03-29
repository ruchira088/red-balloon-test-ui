import React from "react"
import Pagination from "./Pagination.jsx"
import LoadingPage from "./LoadingPage.jsx"

export default React.createClass(
{
    getInitialState()
    {
        return {
            results: [],
            loading: true
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

        this.setState({loading: true})

        fetchItems(params.primaryTerm, page, limit)
            .then(results =>
            {
                this.setState({results, loading: false})
            })
    },

    render()
    {
        const {results, loading} = this.state
        const {location, itemMapper, className} = this.props

        const items = results.map(itemMapper)

        if(loading)
        {
            return (<LoadingPage/>)
        } else
        {
            return (
                <div className={className}>
                    <Pagination location={location}>
                        { items }
                    </Pagination>
                </div>
            )
        }
    }
})