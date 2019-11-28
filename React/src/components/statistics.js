import React, { Component } from 'react';
import styled from 'styled-components';
import {Container,Row,Col } from 'react-bootstrap';
import {
  PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {Tonkla} from './Tonkla';



const Styles = styled.div`
  .uTable{
    background-color:white;
    margin: 5px;
    
  }
  .tTable{
    background-color:white;
    margin: 5px;
  }
  .mt{
    font-size:30px;
  }
  .ml{
    font-size:20px;
    color:#0088FE;
  }
  .ml2{
    font-size:20px;
    color:#FF8042;
  }

  .mll{
    font-size:20px;
    color:green;
  }
  .mll2{
    font-size:20px;
    color:darkblue;
  }
  
`;

const data2= [
  
  {
    name: 'Jan', Line: 4, Visa: 5, amt: 2400,
  },
  {
    name: 'Feb', Line: 3, Visa: 1, amt: 2210,
  },
  {
    name: 'Mar', Line: 2, Visa: 2, amt: 2290,
  },
  {
    name: 'Apr', Line: 2, Visa: 3, amt: 2000,
  },
  {
    name: 'May', Line: 1, Visa: 4, amt: 2181,
  },
  {
    name: 'Jun', Line: 2, Visa: 3, amt: 2500,
  },
  {
    name: 'Jul', Line: 3, Visa: 4, amt: 2100,
  },
  {
    name: 'Aug', Line: 3, Visa: 4, amt: 2100,
  },
  {
    name: 'Sep', Line: 3, Visa: 4, amt: 2100,
  },
  {
    name: 'Oct', Line: 3, Visa: 4, amt: 2100,
  },
  {
    name: 'Nov', Line: 3, Visa: 4, amt: 2100,
  },
  {
    name: 'Dec', Line: 3, Visa: 5, amt: 2100,
  },
 
];

const data=[
  { name: 'Group A', value: 2 },
  { name: 'Group B', value: 5 },

  
]

const COLORS = ['#0088FE', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class statistics extends Component{
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      users: []
    }
    this.logChange = this.logChange.bind(this);
}
componentDidMount() {
  let self = this;
  fetch('/users/stat')
    .then(res => res.json())
    .then(users => self.setState({ users: users }));
}
logChange(e) {
      this.setState({[e.target.name]: e.target.value});  
  }
  render() {
    return (
<React.Fragment>
<Tonkla/>
<Styles>
 <br/><br/>
<Container>
  <Row >
  <Col className="uTable">
    <p className="mt">Ticket type</p>
    <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      <p className="ml">Blue = First Class <p  className="ml2">Oragnge = Economy Class</p></p>
  </Col>
  <Col className="tTable">
  <p className="mt">Payment Method</p>

  <br/><br/>
  <BarChart
        width={600}
        height={300}
        data={data2}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Line" fill="green" />
        <Bar dataKey="Visa" fill="Darkblue" />
      </BarChart>
  </Col>
  </Row>
</Container>
</Styles>
</React.Fragment>
 );
}
}
