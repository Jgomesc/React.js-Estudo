
export default function CardPessoa(props) {

    function MinhaIdade() {
      if (props.idade !== undefined)
          alert('Minha Idade é' + props.idade)
      else
          alert("Não Tenho Idade")
    }

  return (

    <div className="comp-cardpessoa">
       Olá, eu sou  {props.nome}, tenho {props.idade} anos
    </div>
  )
}

