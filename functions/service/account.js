const DBService = require('./dbservice');
const ACCOUNT_SQL = require('../query/account');

class AccountService {
    async getCharacterlist() {
        try {
            let result = await DBService.connectDB(
                ACCOUNT_SQL.GET_CHARACTER_LIST,
                {}
            );
            return result;
        } catch (exception) {
            console.log(exception);
        }
    }

    // async createCharacter(body) {
    //     try {
    //         console.log(body)
    //         let result = await DBService.connectDB(
    //             ACCOUNT_SQL.CHECK_CODE,
    //             body.name_en
    //         );
    //         return result;
    //     } catch (exception) {
    //         console.log(exception)
    //     }
    // }

    // async deleteCharacter(values) {
    //     try {
    //         let result = await DBService.connectDB(
    //             ACCOUNT_SQL.INSERT_INTO_CHARACTER_LIST,
    //             {}
    //         );
    //         return result;
    //     } catch (exception) {
    //         console.log(exception)
    //     }
    // }
}

module.exports = new AccountService();