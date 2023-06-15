
export const Filter =({filterUsers})=> {
  
   
    return (
      <form>
        <label>Find contact</label>
        <input onChange={filterUsers}></input>
      </form>
    );
  
}