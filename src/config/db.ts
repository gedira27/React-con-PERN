import { Sequelize} from 'sequelize'

const db = new Sequelize('postgresql://rest_api_note_typescript_user:rIsysnU70aqGvrzL3GZndpd4gSwW0zC2@dpg-ct74i2jtq21c73bj3tq0-a.oregon-postgres.render.com/rest_api_note_typescript?ssl=true')


export default db