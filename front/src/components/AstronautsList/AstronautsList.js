export function AstronautsList({ astronauts, handleEditClick }) {
  return (
    <table className="tableContainer">
      <thead></thead>
      <tbody>
        {astronauts.map((astronaut) => {
          return (
            <tr key={astronaut.id}>
              <td>
                {astronaut.firstName} {astronaut.lastName}
                <button type="submit" onClick={() => handleEditClick(astronaut)}>
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
