export function AddAstronaut({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
      <br />

      <label htmlFor="lastName">Last name:</label>
      <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
      <br />

      <input type="submit" name="submit" />
    </form>
  );
}
