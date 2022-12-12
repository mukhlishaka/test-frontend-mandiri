import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import './table.css'
import { Row, Col, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TableData = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    // const [sortValue, setSortValue] = useState('')


    const getCoinPaprika = async () => {
        return await axios.get('https://api.coinpaprika.com/v1/coins')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getCoinPaprika()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios.get(`https://api.coinpaprika.com/v1/coins?q=${value}`)
            .then((res) => {
                setData(res.data)
                setValue("")
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="table">
                <div>
                    <div className='mx-2'>
                        <h1 className="mx-5 title">Coin List</h1>
                    </div>
                    <Form style={{ padding: "15px", maxWidth: "400px", alignContent: "center", borderRadius: "20px" }} className="d-flex input-group w-auto" onSubmit={handleSearch}>
                        <FormControl type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
                        <Button className="text-dark bg-primary mx-2" type="submit">
                            Search
                        </Button>
                    </Form >
                    {/* <Row>
                        <Col>
                            <h4>Sort</h4>
                            <select style={{ width: "50%", borderRadius: "2px", height: "30px" }}
                                onChange={handleSort}
                                value={value}
                            ></select>
                        </Col>
                    </Row> */}
                </div>
                <Table striped>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Rank</th>
                            <th>Type</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    {data.length === 0 ? (
                        <tbody>
                            <tr>
                                <td>No data found</td>
                            </tr>
                        </tbody>
                    ) : (
                            data.slice(0, 10).map((coin, i) => (
                            <tbody>
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{coin.id}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.symbol}</td>
                                    <td>{coin.rank}</td>
                                    <td>{coin.type}</td>
                                    <td>{coin.is_active}</td>
                                </tr>
                            </tbody>
                        ))
                    )}
                </Table>
            </div>
        </>
    );
}

export default TableData;