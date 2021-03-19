const TaskListTemplate = `
<div>
    <section class="pf-c-page__main-section pf-m-light">
        <div class="pf-l-split pf-m-gutter">
            <div class="pf-l-split__item">
                <div class="pf-c-content">
                    <h1>Tasks</h1>
                </div>
            </div>
            <div class="pf-l-split__item pf-m-fill"></div>
            <div class="pf-l-split__item pf-c-form pf-m-horizontal">
                <div class="pf-c-form__group no-space" style="display: block;">
                    <button class="pf-c-button pf-m-primary" type="button" v-on:click="refresh()">
                        <span class="pf-c-button__icon">
                            <i class="fas fa-refresh" aria-hidden="true"></i>
                        </span>
                        <span class="pf-c-button__text">Refresh</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="pf-c-page__main-section">
        <table class="pf-c-table pf-m-grid-md" role="grid">
            <thead>
            <tr>
                <th class="pf-m-width-10">ID</th>
                <th class="pf-m-width-20">Task</th>
                <th class="pf-m-width-30">Process Definition</th>
                <th class="pf-m-width-10">Status</th>
                <th class="pf-m-width-10">Created On</th>
            </tr>
            </thead>
            <tr v-show="rows.length === 0" class="pf-m-height-auto" role="row">
                <td role="cell" colspan="8">
                    <div class="pf-l-bullseye">
                        <div class="pf-c-empty-state pf-m-sm">
                            <div v-show="showSpinner === false" class="pf-c-empty-state__content">
                                <i class="fas fa- fa-search pf-c-empty-state__icon" aria-hidden="true"></i>
                                <h2 class="pf-c-title pf-m-lg">No results found</h2>
                                <div class="pf-c-empty-state__body">No results match the select criteria.</div>
                            </div>
                            <div v-show="showSpinner === true" class="pf-c-empty-state__content">
                                <div class="pf-c-empty-state__icon">
                            <span class="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
                              <span class="pf-c-spinner__clipper"></span>
                              <span class="pf-c-spinner__lead-ball"></span>
                              <span class="pf-c-spinner__tail-ball"></span>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr v-show="rows.length != 0" v-for="row in rows" :key="row.name">
                <td>{{row['task-id']}}</td>
                <td>
                    <a v-on:click="openTask(message)">{{row['task-name']}}</a>
                </td>
                <td>{{row['task-proc-def-id']}}</td>
                <td>{{row['task-status']}}</td>
                <td>{{row['task-created-on']}}</td>
            </tr>
        </table>
    </section>
</div>
`

export { TaskListTemplate }