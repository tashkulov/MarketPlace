const fs = require('fs');
const path = require('path');

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});
<<<<<<< HEAD
server.put('/users', (req, res) => {
    try {
        const { id } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.id === id
        );
        const editedUser={
            ...userFromBd,
            ...req.body
        };
        db.users=db.users.map(user=>user.id===id ?editedUser :user);
        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2));

        if (userFromBd) {
            return res.json(editedUser);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

=======

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});



>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
server.post('/register', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const existingUser = users.find((user) => user.username === username);

        if (existingUser) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' });
        }
<<<<<<< HEAD

        const lastUserId = db.users[db.users.length - 1]?.id;

        const newUser = { username, password,productFavorites:[], id: lastUserId ? lastUserId + 1 : 1 };

=======
        const lastUserId=db.users[db.users.length-1]?.id;

        const newUser = { username, password,id:lastUserId ? lastUserId+1 :1 };
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        db.users.push(newUser);

        fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 2));

        return res.status(201).json({
            username,
<<<<<<< HEAD
            id: newUser.id
=======
            id:newUser.idx
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

<<<<<<< HEAD
// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});
=======




>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b

server.use(router);

// запуск сервера
server.listen(3500, () => {
    console.log('server is running on 3500 port');
<<<<<<< HEAD
});
=======
});
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
