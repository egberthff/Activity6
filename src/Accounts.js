import { StyleSheet,Text, ScrollView,Dimensions} from "react-native";
import {DataTable} from 'react-native-paper';
import Data from "./data2.json";
 
const screenWidth = Dimensions.get("window").width;
const screenHigth = Dimensions.get("window").height;

const accounts = ()=>{
    return(
        <DataTable style = {styles.container}> 
          
           <DataTable.Header style ={[styles.tableBorder, styles.tableHeader]}>     
              <DataTable.Title style = {{justifyContent: 'center'}}>
                  <Text style = {styles.tableTitle}>Accounts</Text>
             </DataTable.Title>
         
         </DataTable.Header> 
         
     <DataTable.Header style = {[styles.tableBorder, styles.tableTitleHeader]}>
        <DataTable.Title><Text style = {styles.tableColumnTitle}>ID</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tableColumnTitle}>Username</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tableColumnTitle}>Password</Text></DataTable.Title>
        <DataTable.Title><Text style = {styles.tableColumnTitle}>Usertype</Text></DataTable.Title>
    </DataTable.Header>
        <ScrollView> 
        {Data.map((list)=>(
            <DataTable.Row  style ={styles.tableBorder} key={list.ID} >
                <DataTable.Cell>{list.ID}</DataTable.Cell>
                <DataTable.Cell>{list.Username}</DataTable.Cell>
                <DataTable.Cell>{list.Password}</DataTable.Cell>
                <DataTable.Cell>{list.Usertype}</DataTable.Cell>
                 
            </DataTable.Row>
        ))}
        </ScrollView>
       </DataTable> 
      
    )
}
export default accounts;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: screenWidth,
        height: screenHigth * 0.90,
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
     tableBorder: {
        borderWidth: 1,
        borderStyle: 'solid', 
        borderColor: 'gray'
    },
     tableColumnTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
     }
});