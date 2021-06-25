const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email,index,arrayTOtal) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  console.log(`O index é ${index}`)
  console.log(`O array total é ${arrayTOtal}`)
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList)


