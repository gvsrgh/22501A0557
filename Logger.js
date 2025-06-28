import axios from 'axios';
const API_URL = 'http://20.244.56.144/evaluation-service/logs';

const Log = async (stack, level, pkg, message) => {
    try {
        const response = await axios.post(API_URL, {
            stack,
            level,
            package: pkg,
            message
        });
        console.log('Log created successfully:', response.data);
    } catch (error) {
        console.error('Error creating log:', error);
    }
};

export default Log;
