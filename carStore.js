//Importanto a função de envio de e-mail, disponibiliza pelo professor
const enviarEmail = require('./envia-email');

// Função para verificar o dia da semana atual
function verificarDiaSemana() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const hoje = new Date(); //Receber o dia da semana
    const diaSemanaIndex = hoje.getDay(); // 0 para Domingo, 1 para Segunda-feira, e assim por diante
    return dias[diaSemanaIndex];
}

// Função para montar o corpo do e-mail
function modeloEmail() {
  const emailpadrao = `
    Olá, querido cliente. Como tem passado? Esperamos que bem. 
    Gostaríamos de informar, que recebemos veículos novos aqui na CarStore. 

    Não perca a oportunidade de conferir os lançamentos e os carros mais vendidos no último mês. 
    Aproveite as excelentes ofertas e imperdíveis condições de pagamento.
    Vem pra CarStore! 

  `;
  return emailpadrao;
}

// Função para enviar o e-mail para cada cliente, levando em conta sua decisão de receber as comunicações do marketing
// Lista de e-mails fictícia com flag de decisão de marketing
const listaEmails = [
    { email: 'cliente1@example.com', receberMarketing: true },
    { email: 'cliente2@example.com', receberMarketing: false },
    { email: 'cliente3@example.com', receberMarketing: true },
  ];
  
  // Função para enviar e-mail para os clientes
  function enviarEmailClientes() {
    const diaSemana = verificarDiaSemana();

    // Verifica se é segunda-feira (índice 1)
    if (diaSemana === "Segunda-feira") {
      const emailpadrao = modeloEmail();
      listaEmails.forEach(cliente => {
        // Verifica se o cliente aceita receber marketing
        if (cliente.receberMarketing) {
          const result = enviarEmail(cliente.email, "Novidades da CarStore", emailpadrao);
          
          if (result.status === "Error") {
            console.log("Erro ao enviar e-mail para", cliente.email + ":", result.message);
          } else {
            console.log("E-mail enviado para", cliente.email);
          }

        } else {
          console.log("O cliente", cliente.email, "optou por não receber comunicações de marketing.");
        }
      });
    } else {
      console.log("Hoje não é segunda-feira. E-mails não serão enviados.");
    }
  }
  
  // Chamada da função para enviar e-mails para os clientes
  enviarEmailClientes();
