import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import './table.css'
import { FormControl, Pagination } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TableData = () => {

    const [data, setData] = useState([])
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
    }

    useEffect(() => {
        getCoinPaprika()
    }, [])

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
    
    // pagination
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="table container">
                <div>
                    <div className='mx-2'>
                        <h1 className="mx-5 title">Coin List</h1>
                    </div>
                    <Form style={{ padding: "15px", maxWidth: "400px", alignContent: "center", borderRadius: "20px" }} className="d-flex input-group w-auto" onSubmit={handleSearch}>
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Rank</th>
                            <th>Type</th>
                            <th>Active</th>
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
                                    <td>{coin.id}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.symbol}</td>
                                    <td>{coin.rank}</td>
                                    <td>{coin.type}</td>
                                    <td>{coin.is_active}</td>
                                </tr>
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
            </div>
        </>
    );
}

export default TableData;