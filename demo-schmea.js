cube('visitors', {
    sql: `select * from visitors`,
    measures: {
        visitor_count: {
            type: 'count',
            sql: 'id',
            drillMembers: [source, created_at]
        },
        visitor_revenue: {
            type: 'sum',
            sql: 'amount',
            drillMemberReferences: [source, created_at]
        }
    },
    dimensions: {
        source: {
            type: 'string',
            sql: 'source'
        },
        created_at: {
            type: 'date',
            sql: 'created_at'
        }
    }
})