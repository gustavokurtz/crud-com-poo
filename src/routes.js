import express from 'express';
import User from './user.js';

const router = express.Router();

// Rota para criar um usuário
router.post('/user', (req, res) => {
    const { username, email } = req.body;
    const newUser = User.createUser(username, email);
    res.json(newUser);
  });

  router.get('/users', (req, res) => {
    const allUsers = User.getAllUsers();
    res.json(allUsers);
  });
  
  router.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id); // Certifique-se de converter para número
    const userInfo = User.getUser(userId);
    res.json(userInfo);
  });
  
  router.put('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { newUsername, newEmail } = req.body;
    User.updateUser(userId, newUsername, newEmail);
    res.send('Informações do usuário atualizadas com sucesso');
  });

  router.delete('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    User.deleteUser(userId);
    res.send('Usuário excluído com sucesso');
  });

export default router;  

