export const Profile = ({source}) => {
  console.log(name);
  // console.log(props.age);
  /*return (<>
            <h2>Hello { name } !</h2>
            <p>Vous fêtez vos { age } an{ isPlural({ age })} chez nous aujourd'hui.</p>
            <Image />
        </>)
        */

  return <Image source= { source } />
};

export const Image = ({ source }) => {
  return <img src={ source } alt="image représentant un passage" width={195} />
}

const isPlural = ( { age }) =>  age  >= 2  ? 's' : ''; // syntaxe javaScript
