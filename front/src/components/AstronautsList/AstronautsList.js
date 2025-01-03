export function AstronautsList({ astronauts, handleEditClick, handleDelete }) {
  return (
    <table className="tableContainer">
      <tbody>
        {astronauts.map((astronaut) => {
          return (
            <tr key={astronaut.id}>
              <td>
                {astronaut.firstName} {astronaut.lastName}
              </td>
              <td>
                <button type="submit" onClick={() => handleEditClick(astronaut)}>
                  Edit
                </button>
                <button type="submit" onClick={() => handleDelete(astronaut)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
