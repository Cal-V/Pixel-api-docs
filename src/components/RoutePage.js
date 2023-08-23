import React from 'react'
import Table from './Table'

function RoutePage({data}) {

    if (data)
        return (
            <div className='router-page'>
                <h1>{data.title}</h1>
                <h2>{data.path} - {data.method}</h2>
                {data.input_example ? <div><h4>Input</h4>
                <pre>{JSON.stringify(data.input_example,"\n","    ")}</pre></div> : <></>}
                {data.output_example ? <div><h4>Output</h4>
                <pre>{JSON.stringify(data.output_example,"\n","    ")}</pre></div> : <></>}
                <Table data={data.input_properties_table} />
            </div>
        )
}

export default RoutePage