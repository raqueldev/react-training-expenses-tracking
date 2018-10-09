import React, { Component } from 'react';
import Table from 'react-table'
import queryString from 'query-string'
import 'react-table/react-table.css'

const columns = [
    { Header: 'Title', accessor: 'title'},
    { Header: 'Amount', accessor: 'amount'}
]

export default class ExpensesPage extends Component {
    constructor(props) {
        super()

        const query = queryString.parse(props.location.search)

        this.startingPage = query.page ? Number(query.page) : undefined
        this.startingPageSize = query.pageSize ? Number(query.pageSize) : undefined
        if (query.sortBy) {
            this.startingSort = [{
                id: query.sortBy,
                desc: Number(query.order) === -1
            }]
        }
    }

    onFetchData = async ({ page, pageSize, sorted }) => {
        const { history, getExpenses } = this.props

        const query = { page, pageSize }

        const sort = sorted[0]
        if (sort) {
            query.sortBy = sort.id
            query.order = sort.desc ? -1 : 1
        }

        history.replace(`?${queryString.stringify(query)}`)
        await getExpenses( query )
    }

    render() {
        const { expenses, pages } = this.props
        return(
            <div> 
                <h2> Expenses </h2>
                <Table 
                manual
                columns={columns} 
                data={expenses} 
                pageSize={20}
                onFetchData={this.onFetchData}
                pages={pages}
                defaultPage={this.startingPage}
                defaultPageSize={this.startingPageSize}
                defaultSorted={this.startingSort}
                />
            </div>
        )
    }
}