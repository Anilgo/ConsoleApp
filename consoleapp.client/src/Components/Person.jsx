import React, { useState, useEffect, Fragment } from "react";
import './Person.css';

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
            id: 3,
            name: "Onur Onuroglu",
            email: "onur@onur.com",
            phoneNumber: 5333333333,
            company: "Osman AS"
        },
        {
            id: 4,
            name: "444",
            email: "44r@onur.com",
            phoneNumber: 54444444444,
            company: "O4444 AS"
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
            <table>
                <thead>
                    <tr>
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

                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.company}</td>
                                        <td>...</td>
                                    </tr>

                                )
                            })
                            :
                            "Loading"
                    }

                </tbody>
            </table>
        </Fragment>
    )
}

export default Person;
