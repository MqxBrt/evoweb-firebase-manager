import React from 'react';
import { tables } from '../firebase/tables';

export default function Tables() {

    function addItem(tableName) {

    }

    return (
        <div>
            {tables.map((table) => (
                <div key={table.firebaseName}>
                    <h3>{table.displayName}</h3>
                    <form onSubmit={addItem(table.firebaseName)}>
                        {table.attributes.map((attribute) => (
                            <div key={attribute[0]}>
                                <span>{attribute[0]}</span>
                                <input type={attribute[1]} required />
                            </div>
                        ))}
                    </form>
                    <button type="submit">Ajouter</button>
                </div>
            ))}
        </div>
    )
}