import { StyleSheet,Text,StatusBar, FlatList} from "react-native";
import {DataTable} from 'react-native-paper';
import Data from "./data2.json";
import { Dimensions } from 'react-native';

 
const screenWidth = Dimensions.get("window").width;
const screenHigth = Dimensions.get("window").height;

const Item = ({item}) =>{
    return(
        <DataTable.Row  style = {[ styles.tableBorder]}>
            <DataTable.Cell >{item.ID}</DataTable.Cell>
            <DataTable.Cell >{item.Firstname} {item.Lastname}</DataTable.Cell>
            <DataTable.Cell >{item.Course}</DataTable.Cell>
        </DataTable.Row>
     );
}
const students = ()=>{

   const newList = Data.filter(item => item.Usertype === 'Student');
    
    return(
        
     <DataTable style = {styles.container}> 
        <DataTable.Header style ={[styles.tableBorder, styles.tableHeader]}>     
           <DataTable.Title style = {{justifyContent: 'center'}}>
              <Text style = {styles.tableTitle}>Students</Text>
          </DataTable.Title>
       </DataTable.Header> 
      
      <DataTable.Header style = {[styles.tableTitleHeader, styles.tableBorder]}>
         <DataTable.Title><Text style = {styles.tableColumnTitle}>ID</Text></DataTable.Title>
         <DataTable.Title><Text style = {styles.tableColumnTitle}>Name</Text></DataTable.Title>
         <DataTable.Title><Text style = {styles.tableColumnTitle}>Course</Text></DataTable.Title>
     </DataTable.Header>

     <FlatList   
          data = {newList}
          renderItem = {Item}
          keyExtractor = {item => item.ID} />
      
    </DataTable>
      
    )
}
export default students;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: screenWidth,
        height: screenHigth * 0.90,
        
    },
    tableBorder: {
        borderWidth: 1,
        borderStyle: 'solid', 
        borderColor: 'gray'
    },
    tableTitleHeader: {
        backgroundColor: '#DCDCDC',
    },
    tableHeader: {
        backgroundColor: '#4e85bf',
       
    },
    tableTitle: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
     },
     tableColumnTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
     }
});