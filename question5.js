const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();


const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(() => console.log('Connected to the database successfully!'))
    .catch(err => console.error('Unable to connect to the database:', err));

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false 
});


app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll(); 
        res.json(users); 
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
