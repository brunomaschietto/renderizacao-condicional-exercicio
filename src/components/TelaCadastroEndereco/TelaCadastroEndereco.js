import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton
} from "./styled";

function TelaEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numeroResidencia">
          Número da Residência:
          <Input id="numeroResidencia" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaEndereco;
