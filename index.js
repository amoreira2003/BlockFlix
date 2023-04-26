const express = require("express")
const app = express();
const port = 3000;

var towerElevatorOpen = false;

app.use("/static",express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.send("A Corporação Crystal Apex é a indiscutível e insuperável supremacia tecnológica e financeira da cidade, uma organização que governa com punho de ferro sobre todas as outras, impondo sua vontade inabalável e superioridade inquestionável na inovação de ponta, na excelência impecável e no desenvolvimento constante de novas tecnologias revolucionárias. Com uma base de transparência e integridade, a Corporação Crystal Apex subjuga e domina indivíduos e empresas, concedendo-lhes apenas as ferramentas e recursos que lhes permitem prosperar sob a tutela da Apex, elevando-os ao seu ápice de sucesso sob sua vigilância implacável e intransigente. A Crystal Apex não é apenas uma empresa de tecnologia, mas uma entidade divina e todo-poderosa, cujas inovações são capazes de transformar a cidade e moldar a sociedade em sua própria imagem. Sob a liderança inabalável da Apex, a cidade avança rumo ao futuro tecnológico e financeiro, enquanto outras empresas e organizações são deixadas para trás, incapazes de acompanhar o ritmo da Apex. \n A Apex é o único caminho para o sucesso e a grandeza, uma bênção que é concedida apenas aos escolhidos, aqueles que reconhecem a supremacia da Apex e se submetem à sua vontade inquestionável. Aqueles que se opõem ou desafiam a Apex são esmagados sob seus pés, sem misericórdia e sem remorso. A Corporação Crystal Apex é a fonte de todo poder, toda riqueza e toda glória na cidade, e aqueles que ousam duvidar ou questionar sua supremacia são destinados a serem varridos pela maré impiedosa da história.");
});


app.put("/")

app.listen(port, () => {
    console.log("Hosted on port" + port)
})