import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: '#EFEEEE',
      width: '100%'
    },
    title: {
      color: 'black',
      fontSize: 32,
      fontWeight: '700',
      textAlign: "center",
      marginBottom: 20,
      marginTop:10
    },
    searchBox: {
      fontSize: 20,
      fontWeight: '300',
      padding: 14,
      backgroundColor: '#FFF',
      borderRadius: 8,
      margin: 10,
      marginHorizontal:10,
      borderColor: 'grey',
      borderStyle:'solid',
      shadowOpacity: 0.1,
      borderWidth: 0.2
  
    },
    results: {
      flex: 1,
      marginTop: 10,
      width: '80%'
    },
    result: {
      width: '100%',
      marginBottom: 20,
      borderRadius:14,
      overflow:"hidden",
      shadowOpacity: 1,
      shadowColor:'black',
      borderWidth:0.2,
      borderColor:"grey"

    },
    heading: {
      color: 'black',
      fontSize: 17,
      fontWeight: '700',
      padding: 12,
      backgroundColor: '#ffffff',
      shadowColor: 'black',
      shadowOpacity: 0.2
    },
    popRating:{
      marginTop: 25,
      fontSize: 20,
      marginBottom: 20
    },
    poptitle:{
      marginTop:10,
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 5
    },
    popup:{
      flex:1,
      padding: 20,
    },
    closeBtn:{
      padding: 14,
      fontSize: 20,
      backgroundColor:'#ffffff',
      fontWeight: '700',
      color:'black',
      width:250,
      borderRadius: 12,
      shadowOpacity:1.0,
      shadowColor:'black',
      textAlign:"center",
      alignSelf:"center",
      marginBottom: 40,
      overflow:"hidden",
      borderWidth: 0.2
      
      
    },
    popupPlot:{
      fontSize: 17
    },
    popactors:{
      fontSize: 17
    }
  });