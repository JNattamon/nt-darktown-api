module.exports = {
    GET_CHARACTER_DETAIL: `
      SELECT * FROM character_list WHERE code = ?
    `,

    GET_CHARACTER_LIST: `
      SELECT * FROM character_list
    `,
    CHECK_CODE: `
       SELECT code
         FROM character_list 
        WHERE code LIKE ?
    `,
    INSERT_INTO_CHARACTER_LIST: `
      INSERT INTO character_list (code, user_id, name_th, name_en, last_name_th, last_name_en, age, birth_date, image, role_code)
      values (?, ?, ?, ?, ?, ?, ?, DATE(?), ?, ?);
    `,
    DELETE_CHARACTER: `
      DELETE FROM character_list WHERE code = ?
    `
};
