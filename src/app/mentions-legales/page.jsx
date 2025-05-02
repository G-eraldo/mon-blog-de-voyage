export const metadata = {
  title: "Mentions légales - Nos carnets de voyage",
};

export default function MentionsLegales() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Ce site est un blog personnel édité à titre non professionnel par :
        <br />
        Nom : Geraldo
        <br />
        Email de contact : gerald-f@hotmail.fr
      </p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par :
        <br />
        Vercel Inc.
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723, États-Unis
        <br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          https://vercel.com
        </a>
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les contenus publiés sur ce blog sont à titre informatif et reflètent
        uniquement l’opinion de l’auteur. L’auteur ne peut être tenu responsable
        de l’utilisation des informations présentes sur ce site.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Aucune donnée personnelle n’est collectée à votre insu. Les données
        transmises via le formulaire de contact ne sont utilisées que pour vous
        répondre.
      </p>
    </main>
  );
}
