import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function postAdminHelpdesks(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'url',
        status: 'nonEmptyString',
    }, {
        img: 'nonEmptyString',
        description: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { title, url, status, } = req.body;
     let { description, img } = req.body;

 
    if (!description) {
        description = '';
    } 
    
    if (!img) {
        img = '';
    }

  const imgPath = img.split('/').at(-1);



    try {
        const sql = `SELECT * FROM helpdesks WHERE title = ? OR url_slug = ?;`;
        const [response] = await connection.execute(sql, [title, url]);

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokia helpdesk jau egzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    try {
        const sql = `
            INSERT INTO helpdesks (img, title, url_slug,  status_id, description)
             VALUES (?, ?, ?,
                (SELECT id FROM general_status WHERE name = ?),
                ?);`;
        const [response] = await connection.execute(sql, [imgPath, title, url, status, description]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurta "helpdeks" ',
    });
}