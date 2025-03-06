import { ButtonTheme } from "./components/ButtonTheme";

interface Link {
  id: number;
  title: string;
  url: string;
}

interface HomeProps {
  links: Link[];
}

export default function Home({ links }: HomeProps) {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Botão para alternar o tema */}
      <ButtonTheme />
      
      {/* Imagem de perfil */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 shadow-lg">
        <img
          src="https://via.placeholder.com/150" // Substitua pelo caminho da sua imagem
          alt="Arthur Dantas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nome ou título */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Arthur Dantas
      </h1>

      {/* Lista de links */}
      <ul className="w-full max-w-md space-y-4">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 text-center bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-700 dark:text-white font-medium"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Rodapé com créditos */}
      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Feito com ❤️ por{" "}
          <a
            href="https://www.arthurdantas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Arthur Dantas
          </a>
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const links = [
    { id: 1, title: "www.arthurdantas.com", url: "https://www.arthurdantas.com" },
    { id: 2, title: "Arthur Dantas | GitHub", url: "https://github.com/Arthur-SD15" },
    { id: 3, title: "Arthur Dantas | LinkedIn", url: "https://www.linkedin.com/in/arthur-sd15" },
    { id: 4, title: "Arthur Dantas | Instagram", url: "https://www.instagram.com/_arthursilva7" },
    { id: 5, title: "Arthur Dantas | Lattes", url: "http://lattes.cnpq.br/5805307670427314" },
  ];

  return {
    props: {
      links,
    },
  };
}