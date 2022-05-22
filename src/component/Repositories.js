export default function Repositories(props) {
  const { repositories } = props;
  console.log(repositories);
  return (
    <div className="repositories">
      <h1>Repositorios</h1>
      <span className="back-home">Volver a home</span>
      <div className="contaniner-respositories">
        {repositories.map((repositories, index) => (
          <div className="repositories-containers" key={index}></div>
        ))}
      </div>
    </div>
  );
}
