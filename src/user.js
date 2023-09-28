let userIdCounter = 1; 
const users = []; 

class User {
  constructor(username, email) {
    this.id = userIdCounter++; 
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
    users.push(this); 
  }

  static createUser(username, email) {
    const newUser = new User(username, email);
    return newUser;
  }

  static updateUser(id, newUsername, newEmail) {
    const userToUpdate = this.getUser(id);
  
    if (newUsername !== undefined) {
      userToUpdate.username = newUsername;
    }
  
    if (newEmail !== undefined) {
      userToUpdate.email = newEmail;
    }
  
    
    users.forEach((user, index) => {
      if (user.id === id) {
        users[index] = userToUpdate;
      }
    });
  
    return userToUpdate;
  }

  static deleteUser(id) {
    const userToDelete = this.getUser(id);
    const index = users.indexOf(userToDelete);
    users.splice(index, 1);
  }

  static getAllUsers() {
    return users;
  }

  static getUser(id) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }


}

export default User;
