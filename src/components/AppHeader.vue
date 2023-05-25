<script>
import { store } from "../store";
import { getData } from '../API';

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      getData,
    }
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-xxl bg-dark px-3">
    <div class="container-fluid">
      <a class="navbar-brand text-danger fs-2" href="#">Boolflix</a>
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
          <input v-model="store.filter.query" class="form-control me-4" placeholder="Cerca un titolo" aria-label="Search">
          <button @click="getData(store)" class="btn btn-outline-light">Search</button>
        </div>
      </div>
    </div>
  </nav>
</template>
