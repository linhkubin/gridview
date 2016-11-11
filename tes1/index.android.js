import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import GridView from "react-native-easy-grid-view";

class tes1 extends Component {
    constructor(props) {
        super(props);
        var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithCells([
                {
                    text: 1,
                    backgroundColor:'red'
                }
                , {
                    text: 2,
                    backgroundColor:'green'

                }, {
                    text: 3,
                    backgroundColor:'blue'

                }, {
                    text: 4,
                    backgroundColor:'pink'

                }, {
                    text: 5,
                    backgroundColor:'white'

                }, {
                    text: 'abc',
                    backgroundColor:'black'

                }], 2),
            cellWidth: 0,
            cellHeight: 100
        };
    }

    _renderCell(cell) { /*function of rendering cell view*/
        return <View onLayout={event => {
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
            <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center',backgroundColor:cell.backgroundColor}}
                   resizeMode={Image.resizeMode.stretch} source={cell.image}>
               <Text style={{textAlign:'center',color:'violet',fontSize:50}}>{cell.text}</Text>
            </View>
        </View>
    }

    render() {
        return <View>
            <GridView dataSource={this.state.dataSource}
                      spacing={9} /* khoang cach giua 2 o*/
                      style={{padding:16}}
                      renderCell={this._renderCell.bind(this)}

            />
        </View>
    }
}
 
module.exports = tes1;
 
AppRegistry.registerComponent('tes1', () => tes1);