const createCandidate = async (candidate) => {

        const user = await axios.post('https://rojeto-gamabackend.herokuapp.com/register', form);
        if (user.status === 200) {
            console.log('Cadastro efetuado com sucesso');
        }
        console.log(500)
};

const [form, setForm] = useState({
    nome: '',
    nomeSocial: '',
    aniversario: '',
    profissao: '',
    estadoCivil: '',
    genero: '',
    pcd: '',
    cep: '',
    bairro: '',
    cidade: '',
    uf: '',
    logradouro: '',
    numero: '',
    complemento: '',
    phone: '',
    phone2: '',
    email: '',
    identidade: '',
    CPF: '',
    cargo: '',
    veiculo: '',
    habilitacao: ''
});






// .then(response => { console.log(response.data) })

// .catch(erro => { console.log(erro) });