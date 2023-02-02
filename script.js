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
            let inputs = document.querySelectorAll("input.form-control");
                for (let i = 0; i <  inputs.length; i++){
                inputs[i].readOnly = true;
                }
            } else {
                alert('Deu erro');
        }
            console.log(this.arrayFuncionarios);
    }
            this.cancelar()
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
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayFuncionarios.length; i++){
            let tr = tbody.insertRow();
                let td_id = tr.insertCell();
                let td_funcionario = tr.insertCell();
                let td_registro = tr.insertCell();
                let td_salario = tr.insertCell();
                let td_cargo = tr.insertCell();
                let td_acoes = tr.insertCell();

                td_id.innerText = this.arrayFuncionarios[i].id;
                td_funcionario.innerText = this.arrayFuncionarios[i].nomeFuncionario; 
                td_registro.innerText = this.arrayFuncionarios[i].registro; 
                td_salario.innerText = this.arrayFuncionarios[i].salario; 
                td_cargo.innerText = this.arrayFuncionarios[i].cargo; 

                let imgEdit = document.createElement('img')
                    imgEdit.src = "img/edit.png"
                    td_acoes.appendChild(imgEdit)

                let imgDelete = document.createElement('img')
                    imgDelete.src = "img/excluir.png"
                    td_acoes.appendChild(imgDelete)
            }
        }
    
    novoFuncionario(){
        let input = document.querySelectorAll("input.form-control");   
                    for (let i = 0; i <  input.length; i++){
                document.getElementById("regId").value = " "
                input[i].value = " "
                input[i].removeAttribute('readonly')
            }
            this.cancelar()
            this.listaTabela();
    }

    adicionar(funcionarios){
        funcionarios.salario = funcionarios.salario
        this.arrayFuncionarios.push(funcionarios)
        this.id++;
        document.getElementById('regId').placeholder = ''
    }
    
    validaCampos(funcionarios){let msg = '';
    if(funcionarios.nomeFuncionario == ''){
        msg += 'Informe o nome do funcionário \n'
        document.getElementById('regId').value = " "
    }
    if(funcionarios.registro == ''){
        msg += 'Informe o número de resgistro \n'
        document.getElementById('funcionario').value = " "
    }
    if (msg != ''){
        alert(msg)
        return false;
    }
    return true;
}

    cancelar(){
        document.getElementById('funcionario').value = ''
        document.getElementById('regId').value = ''
        document.getElementById('salario').value = ''
        document.getElementById('cargo').value = ''
        document.getElementById('regId').placeholder = ''
        document.getElementById('added').innerText = ''
        this.editId =  null;
 }

    buscar() {
        let regId = document.getElementById('regId').value;
        let func = document.getElementById('funcionario')
        let sal = document.getElementById('salario')
        let car = document.getElementById('cargo')
        let found = false;
            for (let i = 0; i < this.arrayFuncionarios.length; i++) {
                if (this.arrayFuncionarios[i].registro == regId) {
                    func.value = this.arrayFuncionarios[i].nomeFuncionario;
                    sal.value = this.arrayFuncionarios[i].salario;
                    car.value = this.arrayFuncionarios[i].cargo;
                        func.readOnly = true;
                        sal.readOnly = true;
                        car.readOnly = true;    
                            found = true;
                            break;
                    }
                }
                    if (!found) {
                        document.getElementById('regId').placeholder = 'Digite o registro do funcionário'
                        
                    }
                }





atualizar(){}
preparaEditacao(){}
deletar(){} }

let funcionarios = new Funcionarios()
console.log(funcionarios)

