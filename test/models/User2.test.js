// Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated`
// deberán ser datos de tipo fecha que guarden el momento en que 
//se instancie un nuevo objeto de la clase `User`.

const User = require("./../../app/models/User2");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    //Aqui invocas el código que vas a usar en tu app
    const user = new User(
      1,
      "carlogilmar",
      "Carlo",
      "Bio"
    );

    //Aqui validas los resultados de ese código
    //Esta es la comparación que va a igualar el valor de la izquierda con
    //el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.bio).toBe("Bio");
    //Verifica que el valor no sea undefined
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
});
