<script>
import { store } from "../store";
import { getData } from '../API';
import { getDataSeries } from "../API";


export default {
  name: "AppHeader",

  data() {
    return {
      store,
      getData,
      getDataSeries,

    }
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-xxl bg-dark px-3">
    <div class="container-fluid">
      <a class="navbar-brand text-danger fs-2 mb-1" href="#">Netflix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light">Tv series</a>
          </li>
        </ul>
        <div class="d-flex">
          <!-- OFFCANVAS BTN -->
          <button class="btn btn-dark border-light me-4" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Filters
          </button>
          <input @keyup.enter="getData(store), getDataSeries(store)" v-model="store.filter.query"
            class="form-control me-4" placeholder="Cerca un titolo" aria-label="Search">
          <button @click="getData(store), getDataSeries(store)" class="btn btn-outline-light">Search</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  height: 80px;
}

.navbar-brand {
  font-weight: 700;
}

.canvasBtn {
  max-height: 38px;
}
</style>
