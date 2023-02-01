class Funcionarios {
    constructor(){
        this.id = 1;
        this.editId = null;
        this.arrayFuncionarios = []
    }

    salvar() {
        let funcionarios = this.lerDados();
        if (this.validaCampos(funcionarios)) {
          if (this.editId == null) {
            this.adicionar(funcionarios);
          } else {
            alert('Deu erro');
          }
          console.log(this.arrayFuncionarios);
        }
        this.listaTabela();
      }

    lerDados(){
        let funcionarios = {}

            funcionarios.id = this.id
            funcionarios.nomeFuncionario = document.getElementById('funcionario').value;
            funcionarios.registro = document.getElementById('regId').value;
            funcionarios.salario = document.getElementById('salario').value;
            funcionarios.cargo = document.getElementById('cargo').value;

        return funcionarios;
    }


    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ' ';
        for(let i = 0; i < this.arrayFuncionarios.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_funcionario = tr.insertCell();
            let td_registro = tr.insertCell();
            let td_salario = tr.insertCell();
            let td_cargo = tr.insertCell();

            td_id.innerText = this.arrayFuncionarios[i].id;
            td_funcionario.innerText = this.arrayFuncionarios[i].nomeFuncionario; 
            td_registro.innerText = this.arrayFuncionarios[i].registro; 
            td_salario.innerText = this.arrayFuncionarios[i].salario; 
            td_cargo.innerText = this.arrayFuncionarios[i].cargo; 
        }
    }
    
    
    adicionar(funcionarios){
        funcionarios.salario = parseFloat(funcionarios.salario)
        this.arrayFuncionarios.push(funcionarios)
        this.id++;
    }
    
    
    
    
    validaCampos(){let msg = '';
    if(funcionarios.funcionario == ''){
        msg += 'Informe o nome do produto \n'
    }
    if(funcionarios.registro == ''){
        msg += 'Informe o preço do produto \n'
    }
    if (msg != ''){
        alert(msg)
        return false;
    }
    return true;
}


    atualizar(){}
    preparaEditacao(){}
    cancelar(){}
    deletar(){} }
    
let funcionarios = new Funcionarios()

console.log(funcionarios)
