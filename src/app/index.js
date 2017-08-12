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
        <View>
          <View style={styles.wrapper}>
            <Form add={addItems} />
          </View>
          <View>
            <List todos={todos} deleteItems={deleteItems} editItems={editItems} editingItem={editingItem} />
          </View>
        </View>
      </View>
    );
export default App;
const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "#3A3E4B",
  }
});
