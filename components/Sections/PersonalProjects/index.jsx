import React from 'react';

const PersonalProjects = () => (
  <section>
    <h3>Personal Projects</h3>
    <h2>
      <a
        href="https://twitter.com/brwikiedits"
        rel="noopener noreferrer"
        target="_blank"
      >
        @brwikiedits
      </a>
    </h2>
    <p>Brasil WikiEdits is a bot that tweets anonymous edits to Wikipedia made in the Brazilian's government network, its branches and public companies. I've created this tool to help increase transparency of government actions made online.</p>
    <p>
      Changes reported by <a href="https://twitter.com/brwikiedits" rel="noopener noreferrer" target="_blank">@brwikiedits</a> were covered by several national Brazilian newspapers, such as: <a href="http://g1.globo.com/rn/rio-grande-do-norte/noticia/2014/08/criador-de-perfil-que-indica-alteracoes-na-wikipedia-e-estudante-de-18-anos.html" rel="noopener noreferrer" target="_blank">G1</a>, <a href="http://cbn.globoradio.globo.com/colunas/cbn-tecnologia-da-informacao/2014/08/14/MORTE-DE-EDUARDO-CAMPOS-FOI-COLOCADA-NO-WIKIPEDIA-ANTES-DA-CONFIRMACAO.htm" rel="noopener noreferrer" target="_blank">CBN</a>, <a href="https://www.uol.com.br/tilt/noticias/redacao/2014/08/20/conta-no-twitter-alerta-se-governo-edita-wikipedia-saiba-como-isso-e-feito.htm" rel="noopener noreferrer" target="_blank">UOL</a>, <a href="https://oglobo.globo.com/brasil/perfil-de-miriam-leitao-sofre-nova-alteracao-de-computador-do-governo-13545689" rel="noopener noreferrer" target="_blank">O Globo</a>, <a href="https://gizmodo.uol.com.br/brwikiedits-wikipedia-governo" rel="noopener noreferrer" target="_blank">Gizmodo</a>, <a href="https://tecnoblog.net/162346/bot-twitter-avisa-quando-computador-governo-brasileiro-altera-wikipedia" rel="noopener noreferrer" target="_blank">Tecnoblog</a>, <a href="https://www.tecmundo.com.br/politica/60850-brasileiro-cria-site-identificar-alteracoes-governo-wikipedia.htm" rel="noopener noreferrer" target="_blank">TecMundo</a>, <a href="http://g1.globo.com/jornal-nacional/noticia/2014/08/presidente-determina-sindicancia-para-apurar-ataques-jornalistas.html" rel="noopener noreferrer" target="_blank">Jornal Nacional</a> and <a href="https://www.buzzfeed.com/br/rafaelcapanema/funcionarios-publicos-editando-a-wikipedia-em-vez-de-trabalh" rel="noopener noreferrer" target="_blank">BuzzFeed</a>.
    </p>
    <p>
      The bot uses a forked and edited version of <a href="https://github.com/edsu/anon" rel="noopener noreferrer" target="_blank">anon</a> project. Under the hood, it runs on Node.js and listens to updates on specific IRC channels that streams Wikipedia changes. Once it finds an anonymous edit containing an IP address that matches with a list of Brazilian governement IPs, a tweet is published with the following information: which page was edited, by whom, and a link to the edit reference in Wikipedia which can be used to check parts that were modified and further validate the IP's ownership in a <a href="http://whois.registro.br">whois lookup</a>.
    </p>
  </section>
);

export default PersonalProjects;
