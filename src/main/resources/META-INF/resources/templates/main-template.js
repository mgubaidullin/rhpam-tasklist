const MainTemplate = `
<div class="pf-c-page" id="page-default-nav-example">
    <a class="pf-c-skip-to-content pf-c-button pf-m-primary" href="#main-content-page-default-nav-example">Skip to
        content</a>
    <header role="banner" class="pf-c-page__header">
        <div class="pf-c-page__header-brand">
            <img class="logo" src="/img/pf-icon-process-automation.svg" alt="" />
            <a class="pf-c-page__header-brand-link">
                <h1 class="header">BPM</h1>
            </a>
        </div>
        <div class="pf-c-page__header-tools">
            <div class="pf-l-split__item pf-c-form pf-m-vertical">
                <div class="pf-c-form__group">
                    <label class="pf-c-form__label" for="server">
                      <span class="pf-c-form__label-text">Server:</span>
                      <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                    </label>
                    <input class="pf-c-form-control" v-model="server" required input="true" type="server" id="server" name="server" />
                </div>
            </div>
            <div class="divider" role="separator"></div>
            <div class="pf-l-split__item pf-c-form pf-m-vertical">
                <div class="pf-c-form__group">
                    <label class="pf-c-form__label" for="username">
                      <span class="pf-c-form__label-text">Username:</span>
                      <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                    </label>
                    <input class="pf-c-form-control" v-model="username" required input="true" type="username" id="username" name="username" />
                </div>
            </div>
            <div class="divider" role="separator"></div>
            <div class="pf-l-split__item pf-c-form pf-m-vertical">
                <div class="pf-c-form__group">
                    <label class="pf-c-form__label" for="password">
                      <span class="pf-c-form__label-text">Password:</span>
                      <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                    </label>
                    <input class="pf-c-form-control" v-model="password" required input="true" type="password" id="password" name="password" />
                </div>
            </div>
        </div>
    </header>
    <div class="pf-c-page__sidebar pf-m-dark" id="sidebar">
        <div class="pf-c-page__sidebar-body">
            <nav class="pf-c-nav pf-m-dark" id="page-default-nav-example-primary-nav" aria-label="Global">
                <ul class="pf-c-nav__list">
                    <li class="pf-c-nav__item">
                        <router-link to="/tasklist" v-bind:class="[$route.path === '/tasklist' ? 'pf-m-current' : '', 'pf-c-nav__link']">Task List</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <main role="main" class="pf-c-page__main" tabindex="-1">
        <router-view></router-view>
    </main>
</div>
`

export { MainTemplate }