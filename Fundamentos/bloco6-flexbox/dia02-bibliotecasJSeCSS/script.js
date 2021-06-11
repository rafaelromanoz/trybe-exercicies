const selected = document.querySelector("#selected");
const submit = document.querySelector("#submit");
const nome = document.querySelector("#nome-user");

const states = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goías" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraíma" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

function createOptions() {
  for (let index in states) {
    let option = document.createElement("option");
    option.innerText = states[index].label;
    option.value = states[index].value;
    selected.appendChild(option);
  }
}

createOptions();

var picker = new Pikaday({ field: document.getElementById("datepicker") });


new window.JustValidate(".teste", {
  rules: {
    name: {
      required: true,
      maxLength: 40
    },

    email: {
      required: true,
      maxLength: 50
    },

    cpf: {
      required: true,
      maxLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade:{
      required:true,
      maxLength:28
    },
    estado:{
      required:true
    },
    apartamento:{
      required:true
    },
    resumo:{
      required:true,
      maxLength:1000
    },
    cargo:{
      required:true,
      maxLength:40
    },
    descricao:{
      required:true,
      maxLength:500
    },
    date:{
      required:true
    }
    
  },
});
