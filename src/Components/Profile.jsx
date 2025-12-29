export const Profile = (props) => {
  console.log(props);
  // console.log(props.age);
  return (<>
            <h2>Hello { props.name } !</h2>
            <p>Vous fêtez vos { props.age } ans chez nous aujourd'hui.</p>
            {props.children}
        </>)
};

export const Image = () => {
  return (
  <img src="https://images.pexels.com/photos/28271725/pexels-photo-28271725.jpeg" alt="image représentant ..." width={190}/>
  );
}


