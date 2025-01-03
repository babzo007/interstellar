export function AddAstronautForm({ handleChange, handleSubmit, formData }) {
  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="firstName">
        First name:
      </label>
      <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
      <br />

      <label className="label" htmlFor="lastName">
        Last name:
      </label>
      <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
      <br />

      <input type="submit" name="submit" />
    </form>
  );
}
