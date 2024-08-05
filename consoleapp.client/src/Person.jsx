import React, {useState, useEffect} from "react";

const Person = () => {

    const personData =[
        {
            id : 1,
            name: "Osman Yagmurdereli",
            email: "osman@osman.com",
            phoneNumber : 511111111,
            company: "Osman AS"
        },
        {
            id : 2,
            name: "Adnan Senses",
            email: "adnan@adnan.com",
            phoneNumber : 5222222222,
            company: "Adnan AS"
        },
        {
            id : 1,
            name: "Onur Onuroglu",
            email: "onur@onur.com",
            phoneNumber : 5333333333,
            company: "Osman AS"
        },
    ]

    const [data,setData] = useState([]);

    return (
        <div>Person</div>
    )
}

export default Person;
