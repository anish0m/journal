<script setup lang="ts"></script>

<template>
  <section>
    <div class="container py-4">
      <div class="row mb-4">
        <div class="col-12">
          <nav aria-label="breadcrumb" class="bg-dark text-white rounded-3 p-3 mb-4">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="#" class="text-white-50">Home</a></li>
              <li class="breadcrumb-item"><a href="#" class="text-white-50">User</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row g-4">
        <!-- Profile Card -->
        <div class="col-lg-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                class="rounded-circle img-fluid mb-3"
                style="width: 120px"
              />
              <h5 class="my-2 fw-bold">John Smith</h5>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-3">Bay Area, San Francisco, CA</p>
              <div class="d-flex justify-content-center gap-2 mb-3">
                <button type="button" class="btn btn-primary px-4 fw-bold">Follow</button>
                <button type="button" class="btn btn-outline-primary px-4 fw-bold">Message</button>
              </div>
            </div>
          </div>
          <div class="card mt-4 shadow-sm">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex align-items-center gap-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <span class="text-muted">https://mdbootstrap.com</span>
              </li>
              <li class="list-group-item d-flex align-items-center gap-3">
                <i class="fab fa-github fa-lg text-dark"></i>
                <span class="text-muted">mdbootstrap</span>
              </li>
              <li class="list-group-item d-flex align-items-center gap-3">
                <i class="fab fa-twitter fa-lg" style="color: #55acee"></i>
                <span class="text-muted">@mdbootstrap</span>
              </li>
              <li class="list-group-item d-flex align-items-center gap-3">
                <i class="fab fa-instagram fa-lg" style="color: #ac2bac"></i>
                <span class="text-muted">mdbootstrap</span>
              </li>
              <li class="list-group-item d-flex align-items-center gap-3">
                <i class="fab fa-facebook-f fa-lg" style="color: #3b5998"></i>
                <span class="text-muted">mdbootstrap</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Profile Details -->
        <div class="col-lg-8">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-sm-3 fw-bold">Full Name</div>
                <div class="col-sm-9 text-muted">Johnatan Smith</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3 fw-bold">Email</div>
                <div class="col-sm-9 text-muted">example@example.com</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3 fw-bold">Phone</div>
                <div class="col-sm-9 text-muted">(097) 234-5678</div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3 fw-bold">Mobile</div>
                <div class="col-sm-9 text-muted">(098) 765-4321</div>
              </div>
              <div class="row">
                <div class="col-sm-3 fw-bold">Address</div>
                <div class="col-sm-9 text-muted">Bay Area, San Francisco, CA</div>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.9rem">Web Design</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 80%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Website Markup</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 72%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">One Page</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 89%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Mobile Template</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 55%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Backend API</p>
                  <div class="progress rounded" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 66%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.9rem">Web Design</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 80%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Website Markup</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 72%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">One Page</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 89%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Mobile Template</p>
                  <div class="progress rounded mb-3" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 55%"></div>
                  </div>
                  <p class="mb-1" style="font-size: 0.9rem">Backend API</p>
                  <div class="progress rounded" style="height: 6px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 66%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
