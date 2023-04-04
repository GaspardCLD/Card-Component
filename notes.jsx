const[colors, setColors] = useState({commonColor: '#282828',
  mainColor: '#3a3129',
  secondaryColor: '#c5915d',
  blackColor: '#000000'})

  const colorHandleClick = ()=>{setColors({...colors, commonColor: "white"})} ;

  #c5915d