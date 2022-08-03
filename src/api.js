import axios from 'axios'

const req = axios.create({
    baseUrl:'https://youtube.googleapis.com/youtube/v3',
    params :{
        key:"AIzaSyDR8c-qk1ggmPuU8XwmlprVJG8vWntIb6k"
    }
})

export default req