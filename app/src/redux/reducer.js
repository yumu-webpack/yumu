const defalutState = 'home';
export default (state = defalutState, action) => {
  switch (action.type) {
    case 'HOME':
      return 'home';
    case 'LIST' :
      return 'list';
    case 'SHOPCAR' :
      return 'shopCar';
    case 'MY' :
      return 'my';
    default:
      return state;
  }
}
