import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import './table.css'
<<<<<<< HEAD
import { FormControl, Pagination } from "react-bootstrap";
=======
import { Row, Col, FormControl } from "react-bootstrap";
>>>>>>> origin/master
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TableData = () => {

    const [data, setData] = useState([])
<<<<<<< HEAD
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    const getCoinPaprika = async () => {
        try {
            const response = await axios.get('https://api.coinpaprika.com/v1/coins');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
=======
    const [value, setValue] = useState('')
    // const [sortValue, setSortValue] = useState('')


    const getCoinPaprika = async () => {
        return await axios.get('https://api.coinpaprika.com/v1/coins')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
>>>>>>> origin/master
    }

    useEffect(() => {
        getCoinPaprika()
    }, [])

<<<<<<< HEAD
    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = data.filter((coin) => {
            const name = coin.name.toLowerCase();
            const symbol = coin.symbol.toLowerCase();
            const term = searchTerm.toLowerCase();
            return name.includes(term) || symbol.includes(term);
        });
        setData(filteredData);
    }

    const handleResetSearch = () => {
        getCoinPaprika();
        setSearchTerm('');
    }
    
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="table container">
=======
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
>>>>>>> origin/master
                <div>
                    <div className='mx-2'>
                        <h1 className="mx-5 title">Coin List</h1>
                    </div>
                    <Form style={{ padding: "15px", maxWidth: "400px", alignContent: "center", borderRadius: "20px" }} className="d-flex input-group w-auto" onSubmit={handleSearch}>
<<<<<<< HEAD
                        <FormControl type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <Button className="text-white bg-success mx-2" type="submit">
                            Search
                        </Button>
                        <Button className="text-white bg-danger" onClick={handleResetSearch}>
                            Reset
                        </Button>
                    </Form >
                </div>
                <Table striped>
                    <thead className="table-primary">
                        <tr>
=======
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
>>>>>>> origin/master
                            <th>ID</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Rank</th>
                            <th>Type</th>
                            <th>Active</th>
<<<<<<< HEAD
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td>No data found</td>
                                </tr>
                            </tbody>
                        ) : (
                            currentData.map((coin, i) => (
                                <tr key={coin.id}>
=======
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
>>>>>>> origin/master
                                    <td>{coin.id}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.symbol}</td>
                                    <td>{coin.rank}</td>
                                    <td>{coin.type}</td>
                                    <td>{coin.is_active}</td>
                                </tr>
<<<<<<< HEAD
                            ))
                        )}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                <Pagination>
                    {Array.from({ length: Math.ceil(data.length / itemPerPage) }).map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
                </div>
=======
                            </tbody>
                        ))
                    )}
                </Table>
>>>>>>> origin/master
            </div>
        </>
    );
}

export default TableData;