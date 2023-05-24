## Interface Senai + Parceiros RJ

Inteface do programa Mais Paceiros Rio de Janeiro

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

-[Git](https://git-scm.com/)
-[Node](https://nodejs.org/en)


## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/IST-VilaMariana/mais_parceiros_rj.git

```
2. Instale as dependências do projeto:

```bash
npm install
# ou
yarn
```
## Uso

1. Inicie o servidor: 

```bash
npm run dev
# or
yarn dev
```

2. A aplicação estará disponível em http://localhost:3000

## Mais sobre o NextJS

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Adcionando Conteúdo estático

### Carrocel

1. Acesse a pasta src/components/Carousel/index.tsx

2. Procure a variável "questionsAnswers" e no final a adcione o seguinte objeto neste formato:
```js
const questionsAnswers = [
    ...,
    {
        question: 'Título',
        answer: 'descrição'
    }
]
```
### Modal

1. Acesse a pasta /public no script parceiros.json após a "automotiva" na linha 155 adcione o seguinte objeto:

```bash
    ,
    "area_tecnologica": [
        {
            "id": número,
            "area": "Automotiva",
            "empresa":"Nome da Empresa",
            "escola_responsavel":"código da escola - Nome Escola Senai - bairro "
        }
    ]
```
***Atenção:*** Cabe resaltar que o id deve obdecer a sequência das aréas já declaradas.

2. Faça o download do icone do botão para a pasta /public/images/icons_parceiros

3. Acesse a pasta src/components/CardListEmpresas/index.tsx

4. Faça o import do icone baixado no item 3 nomeando da seguinte forma:

```js
    import nome_icon from "../../../public/images/icons_parceiros/icone_baixado.svg";
```

5. Adcione o seguinte script no retorno da função CardListEmpresas() na linha 69:

```jsx
    <div className={styles.subModalRadix}>
        <ModalRadixUI
            title={'titulo'}
            src={nome_icon}
            area={identificador}
        />
    </div>
```
onde 
* titulo : substitua pelo que foi delarado no atributo area no item 1
* nome_icon : troque pelo nome decalarado no item 4
* identificador : declare um valor posterior aos já declarados anteriormente. Ex.: Se o último for area={9} o posterior deve ser declarado area={10} 

***Atenção***: Cada div só comporta 3 elementos do ModalRadixUI para manter a responsividade

6. Acesse a pasta src/components/ContentModal/index.tsx

7. Após a variável "empresas_energia" na linha 118 adcione o seguinte código: 
```jsx
    const empresas_nova_area_tecnologia = list_parceiros.area_tecnologica.map((item) => {
    return (
        <tr key={item.id}>
            <td style={{'display':'flex', 'justifyContent': 'flex-start'}}>
                <Image src={logo} alt='logo empresa' width={45} height={45}/>
                <div style={{'margin': '1rem'}}>{item.empresa}</div>
            </td>
            <td>{item.escola_responsavel}</td>
        </tr>
    )
});
```
* area_tecnologia : substitua pelo que foi delarado no atributo "area_tecnologica" no item 1

8. Na função "verify_area( )" adcione o seguinte código antes de 'no_empresas':

```jsx
    function verify_area(area: number){
        return(
            ...
            area === novo_id_area_tecnologica ? empresas_nova_area_tecnologica :

        )
    }
```
* novo_id_area_tecnologica : deve ser um número sequencial que obdeceça os já declarados. Ex.: Se o último for area === 9 o próximo deve ser area === 10.

### SlideShow para vídeos
1. Acesse src/components/SliderShowVideo/index.tsx

2. Na linha 7 localize a variável "linkVideo" e adcione no final o seguinte objeto:
```bash
    {
        src : 'url_do_video',
        title : '+Parceiros – Senai-RJ – Depoimento de quem já faz parte da nossa rede | Nome da Empresa',
        company: 'Nome da Empresa'
    }
```
Para os vídeos que são provindos do Youtube não esquecer do "/embed/" para que o servidor tenha acesso de renderização.
```bash
    {
        src: 'https://www.youtube.com/embed/id_video'
    }
```
### Arquivos para Download
1. Acesse pages/index.tsx

2. Na linha 62 substitua todos os valor da variável "endereco_url" para a url do arquivo em pdf

```jsx
    <ButtonDownload endereco_url={"url_do_arquivo"}/>
```


