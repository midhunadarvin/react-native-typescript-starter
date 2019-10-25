import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {loginUserService} from './store/saga';
import Input from 'app/components/input/input';
import Button from 'app/components/button/button';
import styles from './styles';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface userData {
  username: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_-]+$/)
    .min(4)
    .max(16)
    .required(),
  password: Yup.string()
    .matches(/^[a-zA-Z]+(\s?[a-zA-z]+)*$/)
    .min(6)
    .max(16)
    .required(),
});

class Login extends Component<Props, {}> {
  handleLogin = (values: userData) => {
    const {navigation} = this.props;
    loginUserService(values.username, values.password).then(res => {
      navigation.navigate('AppStack');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#FFFFFF"
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView bounces={false}>
            <Formik
              initialValues={{username: '', password: ''}}
              validationSchema={loginSchema}
              onSubmit={values => this.handleLogin(values)}>
              {props => {
                return (
                  <View>
                    <View style={styles.headStyle}>
                      <Icon name="emotsmile" size={100} />
                      <Text style={styles.headText}>
                        Build Something Amazing
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Input
                        placeholder="Username"
                        value={props.values.username}
                        onChangeText={props.handleChange('username')}
                        onBlur={props.handleBlur('username')}
                        error={props.touched.username && props.errors.username}
                      />
                      <Input
                        placeholder="Password"
                        value={props.values.password}
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        secureTextEntry
                        error={props.touched.password && props.errors.password}
                      />
                      <Button
                        text="Login"
                        icontext="menu"
                        onPress={props.handleSubmit}
                      />
                    </View>
                  </View>
                );
              }}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Login;
