const DBService = require('./dbservice');
const ACCOUNT_SQL = require('../query/account');
const response_code = require('../constants/response_code');
const response = require('../shared/response');

class AccountService {
    async getDetail(code) {
        try {
            let result = await DBService.connectDB(
                ACCOUNT_SQL.GET_CHARACTER_DETAIL,
                code
            );
            if (result.length > 0) {
                return new response(response_code.SUCCESS_CODE, 'Success', result[0]);
            } else {
                return new response(response_code.ERROR_REQUEST_INCORRECT, 'ไม่พบตัวละคร');
            }
        } catch (exception) {
            console.log(exception);
        }
    }

    async getCharacterlist() {
        try {
            let result = await DBService.connectDB(
                ACCOUNT_SQL.GET_CHARACTER_LIST,
                {}
            );
            return new response(response_code.SUCCESS_CODE, 'Success', result);
        } catch (exception) {
            console.log(exception);
        }
    }

    async createCharacter(body) {
        try {
            let first_letter = body.name_en.substr(0, 1).toUpperCase();
            let check_code = await DBService.connectDB(
                ACCOUNT_SQL.CHECK_CODE,
                `${first_letter}%`
            );
            let zeroFilled = '001'

            if (check_code.length > 0) {
                var code = parseInt(check_code[check_code.length - 1].code.substr(1, 3)) + 1;
                zeroFilled = ('000' + code).slice(-3)
            }

            let insert_value = [
                `${first_letter}${zeroFilled}`,
                body.user_id,
                body.name_th,
                body.name_en,
                body.last_name_th,
                body.last_name_en,
                body.age,
                body.birth_date,
                body.image,
                body.role_code
            ];
            let insert_response = await DBService.connectDB(
                ACCOUNT_SQL.INSERT_INTO_CHARACTER_LIST,
                insert_value
            )

            if (insert_response.affectedRows === 1) {
                return new response();
            } else {
                return new response(response_code.ERROR_REQUEST_INCORRECT, 'ข้อมูลไม่ถูกต้อง');
            }

        } catch (exception) {
            console.log(exception)
        }
    }

    async deleteCharacter(code) {
        try {
            let result = await DBService.connectDB(
                ACCOUNT_SQL.DELETE_CHARACTER,
                code
            );
            if (result.affectedRows === 1) {
                return new response();
            } else {
                return new response(response_code.ERROR_REQUEST_INCORRECT, 'ไม่พบตัวละคร');
            }
        } catch (exception) {
            console.log(exception)
        }
    }
}

module.exports = new AccountService();