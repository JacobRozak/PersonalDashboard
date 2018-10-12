<Route
          path="/"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />


        <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>

                        ) : (
                            <section className="navbar-section">
                            <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">home</span>
                                </Link>
                            <Link to="/login" className="btn btn-link text-secondary">
                            <span className="text-secondary">login</span>
                    </Link>
                            <Link to="/signup" className="btn btn-link">
                            <span className="text-secondary">sign up</span>
                    </Link>
                        </section>
                    )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">MERN Passport</h1>
                    </div>
                    </header>
                        )
            </div>