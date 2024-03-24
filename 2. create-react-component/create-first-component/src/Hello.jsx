function Hello() {

  // let myName = 'Gourab';
  let number = 456;
  let fullName = () => {
    return 'Gourab Mahapatra';
  }

  return <p>
    MessageNo: {number} I am your master {fullName()}.
  </p>
}

export default Hello;