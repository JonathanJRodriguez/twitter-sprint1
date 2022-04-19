//Requerimiento 1: Se necesita un modelo `User` para guardar
//la información de un usuario de nuestra app: `id`, `username`,
//`name`, `bio`, `dateCreated` y `lastUpdated`.

const User = require("./../../app/models/User");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});
