  function soma(a: number, b: number) {
    return a + b;
  }

  soma(50, 22);

  // types
  // interfaces

  interface IAnimal {
    name: string;
    type: 'terrestre' | 'aquático';
    doNoise(alturaEmDecibeis: number): void;
  }

  type IAnimal = {
     name: string;
     type: 'terrestre' | 'aquático';
     domestico: boolean;
  }

  interface IFelino extends IAnimal {
    visaoNoturna: boolean;
  }


  interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
  }


  type IDomestico = IFelino | ICanino;

  const animal: IDomestico = {
    domestico: true,
    name: 'Dog',
    porte: 'médio',
    type: 'terrestre',
    visaoNoturna: true
  }

  animal.doNoise(5)

  const felino: IFelino = {
    name: 'Leão',
    type: "terrestre",
    visaoNoturna: true,
  }

// ========================= WEB =========================

  const input = document.getElementById('input') as HTMLInputElement;
  input.addEventListener('input', (event) => {
    console.log('Typing');
    const i = event.currentTarget as HTMLInputElement;
  
    console.log(i.value);
  });

  // ======================== Generic Types =========================

  function addLista<T>(array: T[], value: T) {
    return array.map(() => value);
  }

  addLista([1, 2, 3, 4, 5], 55);

  interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor';
  };

  function redirect(user: IUsuario) {
    if (user.cargo in user) {
     // REDIRECIONAR ÁREA ADM
    } 
    // REDIRECIONAR ÁREA USER
  }

  interface Dog {
    name: string;
    age: number;
    favoritePlace?: string;
  }

  type DogReadOnly = {
    +readonly [K in keyof Dog]-?: Dog[K];
  }

  class myDog implements Dog {
    name; age;

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const dog = new myDog('Qwerty', 7);
  dog.age = 3;
  console.log(dog);

  import $ from 'jquery';

  $.fn.extends({
    novaFuncao() {
      console.log('NOVA FUNÇÃO');
    }
  });

  $('body').novaFuncao();

