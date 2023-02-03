class Funcionarios {
    constructor(){
        this.id = 1;
        this.editId = null;
        this.arrayFuncionarios = []
    }

// Método para salvar e validar os dados fornecidos pelo usuário //
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
                    this.atualizar(this.editId,funcionarios);
            }
        }
            this.cancelar()
            this.listaTabela();
    }

//  O Método tabela cria os elementos no HTML //
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
                        td_salario.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.arrayFuncionarios[i].salario); 
                        td_cargo.innerText = this.arrayFuncionarios[i].cargo; ;
                            
                            let imgEdit = document.createElement('img');
                            imgEdit.src = "img/edit.png"
                            td_acoes.appendChild(imgEdit);
                            imgEdit.setAttribute("onclick", "funcionarios.editar(" + JSON.stringify(this.arrayFuncionarios[i])+")");
                            
                            let imgDelete = document.createElement('img');
                            imgDelete.src = "img/excluir.png"
                            td_acoes.appendChild(imgDelete);
                            imgDelete.setAttribute("onclick", "funcionarios.deletar("+ JSON.stringify(this.arrayFuncionarios[i].id)+")");
                        }
                    }

// Define os dados que serão inseridos na tabela //
    lerDados(){
        let funcionarios = {}
            funcionarios.id = this.id
            funcionarios.nomeFuncionario = document.getElementById('funcionario').value;
            funcionarios.registro = document.getElementById('regId').value
            funcionarios.salario = document.getElementById('salario').value
            funcionarios.cargo = document.getElementById('cargo').value;
        return funcionarios;
            }
// Cria um novo funcionário, desabilita o readOnly dos inputs, cria um registro aleatório e devolve no input de registro, sendo possível editar apenas posteriormente //
    novoFuncionario(){
        let btn = document.getElementById('btn-1');
        let input = document.querySelectorAll("input.form-control");   
            for (let i = 0; i <  input.length; i++){
                input[i].value = ""
                input[i].removeAttribute('readonly');
            }   
        this.cancelar()
        this.listaTabela(); 
        function gerarRegAleatorio() {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const letter = letters[Math.floor(Math.random() * letters.length)];
            const numbers = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
            return letter + numbers;
         }
            let randomReg = document.getElementById('regId');
                randomReg.value = gerarRegAleatorio();
                randomReg.readOnly = true
                btn.disabled = false;
            }
// Adiciona os funcionarios posteriormente da validação //
    adicionar(funcionarios){
        funcionarios.salario = funcionarios.salario
        this.arrayFuncionarios.push(funcionarios);
        this.id++;
        document.getElementById('regId').placeholder = ''
    }
// Valida se todos os campos obrigatórios estão preenchidos, tais como o nome do funcionário e o registro, que é gerado aleatoriamente //
    validaCampos(funcionarios){
        let msg = '';
            if(funcionarios.nomeFuncionario === ''){
                msg += 'Informe o nome do funcionário \n'
                document.getElementById('regId').value = " "
            }
        if(funcionarios.registro === ''){
            msg += 'Informe o número de resgistro \n'
            document.getElementById('funcionario').value = " "
            } 
        if (msg != ''){     
            alert(msg)
            return false;
        }
        return true;
}
// Edita os dados, vou fazer de uma maneira mais simples posteriormente pois o código ficou muito poluido //
    editar(dados){
        let input = document.querySelectorAll("input.form-control");   
            for (let i = 0; i <  input.length; i++){
                input[i].value = ""
                input[i].removeAttribute('readonly');
            }
        this.editId = dados.id;
        document.getElementById("funcionario").value = dados.nomeFuncionario;
        document.getElementById("regId").value = dados.registro;
        document.getElementById("salario").value = dados.salario;
        document.getElementById("cargo").value = dados.cargo;
        document.getElementById("btn-1").innerText = "Atualizar"

   
    }
// Cancela operações e esvazia os campos //
    cancelar(){
        document.getElementById('funcionario').value = ''
        document.getElementById('regId').value = ''
        document.getElementById('salario').value = ''
        document.getElementById('cargo').value = ''
        document.getElementById('regId').placeholder = ''
        document.getElementById('added').innerText = ''
            this.editId =  null;
            let randomReg = document.getElementById('regId')
            randomReg.readOnly = false;
 }
// Através do número do registro tras informações do funcionário sem a possibilidade de editar, ainda será simplificado //
    buscar() {
        let regId = document.getElementById('regId').value;
        let func = document.getElementById('funcionario')
        let sal = document.getElementById('salario')
        let btn = document.getElementById('btn-1')
        let car = document.getElementById('cargo')
        let found = false;
               for (let i = 0; i < this.arrayFuncionarios.length; i++) {
                if (this.arrayFuncionarios[i].registro == regId) {
                    func.value = this.arrayFuncionarios[i].nomeFuncionario;
                    sal.value = this.arrayFuncionarios[i].salario;
                    car.value = this.arrayFuncionarios[i].cargo;
                        func.readOnly = true;
                        sal.readOnly = true;
                        btn.disabled = true;
                        car.readOnly = true;    
                            found = true;
                            break;
                }
            }
                if (!found) {
                    document.getElementById('regId').placeholder = 'Digite o registro do funcionário'
                    alert(`Não foi encontrado nenhum funcionário com o registro ${regId}`)
                }
            }
    //Atualiza os dados//             
    atualizar(id, produto){
        for(let i = 0; i < this.arrayFuncionarios.length; i++){
            if(this.arrayFuncionarios[i].id == id){
                this.arrayFuncionarios[i].nomeFuncionario = produto.nomeFuncionario;
                this.arrayFuncionarios[i].registro = produto.registro;
                this.arrayFuncionarios[i].salario = produto.salario;
                this.arrayFuncionarios[i].cargo = produto.cargo;
                document.getElementById("btn-1").innerText = "Salvar"
            }
                    document.getElementById("funcionario").readOnly = true
                    document.getElementById("regId").readOnly = true
                    document.getElementById("salario").readOnly = true
                    document.getElementById("cargo").readOnly = true
            }
        }
// Deleta o funcionário//
    deletar(id){
        if(confirm(`Quer mesmo deletar o ID ${id}?`)){
            let tbody = document.getElementById('tbody');
            for(let i = 0; i < this.arrayFuncionarios.length; i++){
                if(this.arrayFuncionarios[i].id == id){
                    this.arrayFuncionarios.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }
}       
let funcionarios = new Funcionarios()   


