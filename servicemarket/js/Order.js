class Order {
  constructor(id, completedSteps) {
    this.id = id;

    this.progressbar = new ProgressBar(Order.steps, 0);
  }

  addToBody() {
    document.body.appendChild(this.progressbar.element);
  }
}
Order.steps = ["Started", "Breeding", "Training", "Finish"];

class UserOrder {
  constructor(jsonObject) {
    this.username = jsonObject.username;
    this.pokemonName = jsonObject.pokemon_name;
    this.gender = jsonObject.gender;
    this.move1 = jsonObject.move1;
    this.move2 = jsonObject.move2;
    this.move3 = jsonObject.move3;
    this.move4 = jsonObject.move4;
    this.ability = jsonObject.ability;
    this.createdAt = jsonObject.created_at;
  }
}

class OrderData {
  constructor(pokemonName, gender, level, move1, move2, move3, move4, ability, ivHP, ivAtk, ivDef, ivSpAtk, ivSpDef, ivSpe, evHP, evAtk, evDef, evSpAtk, evSpDef, evSpe) {
    this.pokemonName = pokemonName;
    this.gender = gender;
    this.level = level;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
    this.ability = ability;
    this.ivHP = ivHP;
    this.ivAtk = ivAtk;
    this.ivDef = ivDef;
    this.ivSpAtk = ivSpAtk;
    this.ivSpDef = ivSpDef;
    this.ivSpe = ivSpe;
    this.evHP = evHP;
    this.evAtk = evAtk;
    this.evDef = evDef;
    this.evSpAtk = evSpAtk;
    this.evSpDef = evSpDef;
    this.evSpe = evSpe;
  }

  serialize() {
    return JSON.stringify({
      pokemon_name: this.pokemonName,
      gender: this.gender,
      level: this.level,
      move1: this.move1,
      move2: this.move2,
      move3: this.move3,
      move4: this.move4,
      ability: this.ability,
      iv_hp: this.ivHP,
      iv_atk: this.ivAtk,
      iv_def: this.ivDef,
      iv_spatk: this.ivSpAtk,
      iv_spdef: this.ivSpDef,
      iv_spe: this.ivSpe,
      ev_hp: this.evHP,
      ev_atk: this.evAtk,
      ev_def: this.evDef,
      ev_spatk: this.evSpAtk,
      ev_spdef: this.evSpDef,
      ev_spe: this.evSpe
    });
  }
}
