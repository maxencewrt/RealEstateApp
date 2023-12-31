const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()
const pool = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

// get all properties
app.get('/properties/:userEmail', async (req, res) => {

    const { userEmail } = req.params
    console.log(userEmail)

    try {
        const properties = await pool.query('SELECT * FROM properties WHERE user_email = $1;', [userEmail])
        res.json(properties.rows)
    } catch (err) {
        console.error(err)
    }
})

// // create a new properties
// app.post('/properties', async (req, res) => {
//     const { user_email, title, progress, date } = req.body
//     console.log(user_email, title, progress, date)
//     const id = uuidv4()
//     try {
//         const newProperty = await pool.query(`INSERT INTO properties(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5);`,
//             [id, user_email, title, progress, date])
//         res.json(newProperty)
//     } catch (err) {
//         console.error(err)
//     }
// })

// create a new properties2
app.post('/properties', async (req, res) => {
    const { title, tag, address, description, purchase_date, price, surface, price_m2, cashflow, link_rental, link_bank, link_travaux, user_email } = req.body
    const id = uuidv4()
    try {
        const newProperty = await pool.query(`INSERT INTO properties2(id, title, tag, address, description, purchase_date, price, surface, price_m2, cashflow, link_rental, link_bank, link_travaux, user_email) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10, $11, $12, $13 ,$14);`,
            [id, title, tag, address, description, purchase_date, price, surface, price_m2, cashflow, link_rental, link_bank, link_travaux, user_email])
        res.json(newProperty)
    } catch (err) {
        console.error(err)
    }
})

// edit a properties
app.put('/properties/:id', async (req, res) => {
    const { id } = req.params
    const { user_email, title, progress, date } = req.body
    try {
        const editProperty = await pool.query(`UPDATE properties SET user_email = $1 , title = $2 , progress =$3 , date = $4 WHERE id = $5;`,
            [user_email, title, progress, date, id])
        res.json(editProperty)
    } catch (err) {
        console.error(err)
    }
})

// delete a properties
app.delete('/properties/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteProperty = await pool.query(`DELETE FROM properties WHERE id = $1;`, [id])
        res.json(deleteProperty)
    } catch (err) {
        console.error(err)
    }
})

// signup
app.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName, userRole } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    try {
        const signUp = await pool.query(`INSERT INTO users (email, hashed_password, first_name, last_name, user_role) VALUES($1, $2, $3, $4, $5);`,
            [email, hashedPassword, firstName, lastName, userRole])
        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
        res.json({ email, token })
    } catch (err) {
        console.error(err)
        if (err) {
            res.json({ detail: err.detail })
        }
    }
})

// login
app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const users = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (!users.rows.length) return res.json({ detail: 'User does not exist' })
        const success = await bcrypt.compare(password, users.rows[0].hashed_password)
        const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
        if (success) {
            res.json({ 'email': users.rows[0].email, token })
        } else {
            res.json({ detail: 'Login Failed' })
        }
    } catch (err) {
        console.error(err)
        if (err) {
            res.json({ detail: err.detail })
        }
    }
})

// Ajoutez une nouvelle route pour obtenir le rôle de l'utilisateur
app.get('/user/:email', async (req, res) => {
    const { email } = req.params;

    try {
        // Interrogez votre base de données ou l'endroit où vous stockez les informations de l'utilisateur pour obtenir le rôle en fonction de l'adresse e-mail.
        // Pour cet exemple, je suppose que vous avez une table 'users' dans votre base de données.
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length > 0) {
            const userRole = user.rows[0].user_role;
            const userFirstName = user.rows[0].first_name;
            res.json({ userRole, userFirstName });
        } else {
            res.status(404).json({ error: 'Utilisateur introuvable' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du rôle de l\'utilisateur :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});


app.listen(PORT, () => console.log('Server running on PORT 8000'))