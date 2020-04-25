import { Text, View, TextInput, ScrollView, Image, TouchableHighlight, Modal, Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import React from 'react';

const apiUrl = "http://www.omdbapi.com/";
const styles = require('./styles');

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      s: "",
      results: [],
      selected: {},
      page: 1
    }
  }

  openPopup = (id) => {
    axios(`${apiUrl}?i=${id}&apikey=eeefc96f`).then(({ data }) => {
      let result = data;
      // Alert.alert("Error","Movie not found!",[{text:'Ok'}])
      this.setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  };

  search = (updateResult, page, text) => {
    var query = text;
    let url = `${apiUrl}?s=${encodeURI(query)}&apikey=eeefc96f&page=${page}`;
    axios(url)
      .then(({ data }) => {
        var results = this.state.results;
        if(updateResult) {
          results = [];
        }
        if(data.Search != undefined) {
          data.Search.forEach(element => {
            if(!(results.some(movie => movie.imdbID === element.imdbID))) {
              results.push(element);
            } 
          });
        }

        this.setState(prevState => {
          return { ...prevState, results: results }
        })
      }).catch((err) => {
        console.log(err);
      })
  };

  renderModal = () => {
    return(
      <Modal
      animationType='slide'
      transparent={false}
      visible={(typeof this.state.selected.Title != "undefined") ? true : false}
        >
          <View style={styles.popup}>
            <Image source={{uri: this.state.selected.Poster}} style={{width: '100%', height: 300, borderRadius: 12, marginTop:30}} resizeMode='cover'/>
            <Text style={styles.poptitle}>{this.state.selected.Title}</Text>
            
            <Text style={styles.popRating}>IMDB Rating: {this.state.selected.imdbRating}</Text>
            <Text style={styles.popactors}>Actors: {this.state.selected.Actors}</Text>
            <Text style={styles.popupPlot}>Plot:{this.state.selected.Plot}</Text>
            
          </View>
          <TouchableOpacity
            onPress={()=> this.setState(prevState=>{
              return { ...prevState, selected: {}}
            })}
            >
            <Text style={styles.closeBtn}>Close</Text>
          </TouchableOpacity>
        </Modal>
    );
  }


  renderSearchBox = () => {
    return(
      <TextInput
        style={styles.searchBox}
        placeholder="Enter a movie"
        onChangeText={text => this.setState({ s: text })}
        autoCorrect={false}
        onSubmitEditing={() => this.search(true, 1, this.state.s)}
        value={this.state.s}
      />
    )
  }
  
  renderNextPage = () => {
    let page = this.state.page;
    let newPage = page + 1;
    this.setState({ page: newPage });
    this.search(false, newPage, this.state.s);
  }

  render() {
      return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>OMDB Movies</Text>
            {this.renderSearchBox()}
            <FlatList
            data={this.state.results}
            style={{ marginLeft: 10, marginRight: 10}}
            keyExtractor={(item, index) => item.imdbID + index}
            onEndReached={() => this.renderNextPage()}
            renderItem={({ item }) => {
                return(
                <TouchableOpacity onPress={() => this.openPopup(item.imdbID)}>
                    <View style={styles.result}>
                    <Image
                        source={{ uri: item.Poster }}
                        style={{
                        width: "100%",
                        height: 300
                        }}
                        resizeMode="cover"
                    />
                    <Text style={styles.heading}>{item.Title}</Text>
                    </View>
                </TouchableOpacity>
                );
            }}
            />
            {this.renderModal()}
        </SafeAreaView>
      );
    }
}
