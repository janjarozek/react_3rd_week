import './App.css';

import Form from './components/Form';
import MyOwnCard from './components/MyOwnCard';
import Menu from './components/Menu';
import MenuLink from './components/Menu/MenuLink';
import Employees from './components/Employees';

const styles={
  container: {
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 140,
    minWidth: 660,
    float: 'left',
  }
}

const data = [
  {
    id: 0,
    firstName: 'John',
    lastName: 'Nowicki',
    details: 'Client Work somewhere ...',
    age: '20',
    salary: '400$',
    position: 'clerck',
    phone: '111-55-55',
  },
  {
    id: 1,
    firstName: 'Ray',
    lastName: 'Blizky',
    details: 'Client doesn\'t work somewhere ...',
    age: '24',
    salary: '1140$',
    position: 'police officer',
    phone: '222-55-55',
  },
  {
    id: 2,
    firstName: 'Phil',
    lastName: 'Black',
    details: 'Work somewhere ...',
    age: '42',
    salary: '800$',
    position: 'cleaner',
    phone: '333-55-55',
  },
  {
    id: 3,
    firstName: 'Greg',
    lastName: 'Funky',
    details: 'Client does something',
    age: '51',
    salary: '11400$',
    position: 'architect',
    phone: '444-55-55',
  }
];

function App() {
  return (
    <div className="App">
      <Menu style={styles.nav}>
        <MenuLink to="/" label="Home"/>
        <MenuLink to="/about" label="About"/>
        <MenuLink to="/contact" label="Contact" isActive/>
        <MenuLink to="/posts" label="Posts" />
      </Menu>
      <div style={styles.container}>
        <Form />
        <MyOwnCard
          title="Krewetko-chorizowa Paella"
          intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          showMore="false"
          content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
        />
        <Employees employeesData={data} />
      </div>
    </div>
  );
}

export default App;
