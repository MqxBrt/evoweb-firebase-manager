import React, { useEffect, useState } from 'react';
import { tables } from '../firebase/tables';
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export default function Tables() {

    const [formTables, setFormTables] = useState({});
    const [formVisibilities, setFormVisibilities] = useState({});

    useEffect(() => {

        const initialFormTables = {};
        const initialFormVisibilities = {};

        tables.map((table) => {
            initialFormTables[table.firebaseName] = {};
            initialFormVisibilities[table.firebaseName] = false;
            table.attributes.map((attribute) => {
                initialFormTables[table.firebaseName][attribute[0]] = null;
            });
        });

        setFormTables(initialFormTables);
        setFormVisibilities(initialFormVisibilities);
    }, []);

    function toggleFormVisibility(tableName) {
        if (formVisibilities[tableName]) {
            const updatedVisibilities = {
                ...formVisibilities,
                [tableName]: !formVisibilities[tableName],
            };
            setFormVisibilities(updatedVisibilities);
        } else {
            const initialFormVisibilities = {};
            tables.map((table) => {
                initialFormVisibilities[table.firebaseName] = table.firebaseName === tableName;
            });
            setFormVisibilities(initialFormVisibilities);
        }
    };

    function changeValue(event, tableName, attributeName, attributeType) {
        var newValue;
        if (attributeType === "checkbox") {
            newValue = event.target.checked;
        } else if (attributeType === "number") {
            newValue = Number(event.target.value);
        } else {
            newValue = event.target.value;
        }

        setFormTables((prevFormTables) => {
            const updatedFormTables = { ...prevFormTables };
            updatedFormTables[tableName] = {
                ...prevFormTables[tableName],
                [attributeName]: newValue,
            };
            return updatedFormTables;
        });
    }

    function addItem(event, tableName) {
        event.preventDefault();

        var table = collection(firestore, tableName);

        try {
            addDoc(table, formTables[tableName]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {tables.map((table) => (
                <div>
                    <button onClick={() => toggleFormVisibility(table.firebaseName)}>{table.displayName}</button>
                    {formVisibilities[table.firebaseName] && <div key={table.firebaseName}>
                        <h3>{table.displayName}</h3>
                        {table.attributes.map((attribute) => (
                            <div key={attribute[0]}>
                                <span>{attribute[0]}</span>
                                <input type={attribute[1]} required onChange={(e) => changeValue(e, table.firebaseName, attribute[0], attribute[1])} value={formTables[table.firebaseName][attribute[0]]} checked={formTables[table.firebaseName][attribute[0]]} />
                            </div>
                        ))}
                        <button onClick={(e) => addItem(e, table.firebaseName)}>Ajouter</button>
                    </div>}
                </div>
            ))}
        </div>
    )
}