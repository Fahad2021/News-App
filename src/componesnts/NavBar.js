import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">News24TV</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Business</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Entertainment</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">General</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Health</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Science</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Sports</a></li>
                  <li class="nav-item"><a class="nav-link" href="/about">Technology</a></li>




              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;