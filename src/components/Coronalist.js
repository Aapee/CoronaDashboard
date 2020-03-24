import React, {useState, useEffect} from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function Coronalist(){
    const [customer, setCustomers] = useState([]);

    useEffect(() => fetchData() , []);

  const fetchData = () =>{
        fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
        .then(response => response.json())
        .then(data => setCustomers(data.confirmed))
    }
       const columns  = [
        { title: 'Henkilöt', field: 'id'},
        { title: 'Päivämäärä', field: 'date'},
        { title: 'Alue', field: 'healthCareDistrict'},
        { title: 'Viruksen alkuperä', field: 'infectionSourceCountry'}
       ]

    return(
        <div>
            <MaterialTable data={customer} columns={columns} icons={tableIcons}
        title="Sairastuneet henkilöt"
            />
        </div>
    );
}
