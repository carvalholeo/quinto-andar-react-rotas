import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

function Navbar() {
  return (
    <header className="mx-2 mb-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">Hortifruti do Guarujá</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Página Inicial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">Sobre nós</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contato</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;