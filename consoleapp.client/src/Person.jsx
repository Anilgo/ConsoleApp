import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';

const Person = () => {

    const personData = [
        {
            id: 1,
            name: "Osman Yagmurdereli",
            email: "osman@osman.com",
            phoneNumber: 511111111,
            company: "Osman AS"
        },
        {
            id: 2,
            name: "Adnan Senses",
            email: "adnan@adnan.com",
            phoneNumber: 5222222222,
            company: "Adnan AS"
        },
        {
            id: 1,
            name: "Onur Onuroglu",
            email: "onur@onur.com",
            phoneNumber: 5333333333,
            company: "Osman AS"
        },
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(personData)
    },
        []
    )

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Company & Job Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.company}</td>
                                    </tr>

                                )
                            })
                            :
                            "Loading"
                    }

                </tbody>
            </Table>
        </Fragment>
    )
}

export default Person;
