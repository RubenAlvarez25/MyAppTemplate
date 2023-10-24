import { useEffect, useState } from "react";
import axios from "axios";

export const TableComponent = () => {
  /*REACT LOGIC */
  const [client, setClient] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/customer/showInfo`)
      .then((res) => setClient(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/customer/delInfo/${id}`)
      .then((res) => {
        setClient(client.filter((elem) => elem.customer_id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*REACT LOGIC */
  return (
    <div>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {client.map((rowData) => (
            <tr key={rowData.id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {rowData.name}
                {rowData.customer_id}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {rowData.email}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {rowData.phone}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {rowData.message}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {" "}
                <button onClick={() => handleDelete(rowData.customer_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
