
const App: () => React$Node = () => {
  const [hiddenText, setHiddenText] = useState(true);
  const [input, setInput] = useState("input");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <Button
              title="Button"
              style={styles.button}
              onPress={() => setHiddenText(!hiddenText)}
              accessibilityLabel="button"
            />
            {hiddenText ?
              <Text accessibilityLabel="texto">Texto !</Text>
              :
              null
            }
            <TextInput
              value={input}
              onChangeText={(i) => setInput(i)}
              accessibilityLabel="input"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
