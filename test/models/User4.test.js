/*Requerimiento 4: Cada objeto necesita los siguientes 
setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
Solución: Agrega los setters usando la palabra `set` y modificando el 
atributo indicado.*/

const User = require("./../../app/models/User3");

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
  test("Add getters", () => {
    const user = new User(1,"carlogilmar", "Carlo", "Bio")
    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
  test("Add setters", () => {
    const user = new User(1,"carlogilmar", "Carlo", "Bio")
    user.setUsername = "Gilmar";
    expect(user.getUsername).toBe("Gilmar");

    user.setBio = "New bio";
    expect(user.getBio).toBe("New bio");
  });
});