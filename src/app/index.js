import React from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';


// Components
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'


const App = ({
  todos,
  showItems,
  addItems,
  deleteItems,
  editItems,
  editingItem
}) => (
      <View>
        <Header />
        {/*<View className="grid-x">
          <View className="small-6 cell">
            <Form add={addItems} />
          </View>
          <View className="small-6 cell">
            <List todos={todos} deleteItems={deleteItems} editItems={editItems} editingItem={editingItem} />
          </View>
        </View>*/}
      </View>
    );
export default App;
