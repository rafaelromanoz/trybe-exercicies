const {
  encode,
  decode,
  techList,
  hydrate
} = require('./parte2');

describe('Encode e decode',() => {
  it('Se encode é função',() => {
   expect(typeof encode).toBe('function')
  })
  it('Se decode é função',() => {
    expect(typeof decode).toBe('function')
   })
   it('Se decode é função',() => {
    expect('12345').toBe(encode('aeiou'))
   })
   it('Se decode é função',() => {
    expect('aeiou').toBe(decode('12345'))
   })
   it('Se decode é função',() => {
    expect('1bcd2fgh3jklmn4pqrst5vwxyz').toBe(encode('abcdefghijklmnopqrstuvwxyz'))
   })
   it('Se decode é função',() => {
    expect('0aeiou6789').toBe(decode('0123456789'))
   })
   it('Verifica se a função tem o tamanho retornado certo',() => {
    expect(('Rafael de Oliveira Romano').length).toEqual((encode('Rafael de Oliveira Romano')).length)
   })
   it('Verifica se a função tem o tamanho retornado certo',() => {
    expect(('Rafael de Oliveira Romano').length).toEqual(decode('Rafael de Oliveira Romano').length)
   })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
