export function EditAstronautForm({ formEditData, handleEditChange, handleEditSubmit }) {
  return (
    <form onSubmit={handleEditSubmit}>
      <label className="label" htmlFor="firstName">
        First name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formEditData.firstName}
        required
        onChange={handleEditChange}
      />
      <br />

      <label className="label" htmlFor="lastName">
        Last name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        value={formEditData.lastName}
        onChange={handleEditChange}
      />
      <br />

      <button type="submit">Save changes</button>
    </form>
  );
}
