import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
          <div className="container">
            <h1>Antd DatePicker!</h1>
            <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
          </div>
        );
    }
}

export default Login;
