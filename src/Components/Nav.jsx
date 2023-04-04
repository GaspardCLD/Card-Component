function Nav({colorHandleClick, pokemonColors}) {

  return (
    <ul className="sticky-nav-desktop">
    {pokemonColors.map((el)=>{
        return (
            <li key={el.id}>
                <img src={el.imgSrc} alt={el.id} onClick={()=>colorHandleClick(el)} />
            </li>
        )
    })}
    </ul>
  );
}

export default Nav;
