|-- news-app
    |-- .gitignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.ts
        |-- shims-vue.d.ts
        |-- assets
        |   |-- css
        |   |   |-- border.css
        |   |   |-- iconfont.css
        |   |   |-- iconfont.eot
        |   |   |-- iconfont.svg
        |   |   |-- iconfont.ttf
        |   |   |-- iconfont.woff
        |   |   |-- iconfont.woff2
        |   |   |-- resets.css
        |   |-- js
        |       |-- common.js
        |       |-- fastclick.js
        |-- components
        |   |-- Header
        |   |   |-- index.vue
        |   |-- Loading
        |   |   |-- index.vue
        |   |-- NavBar
        |   |   |-- index.vue
        |   |   |-- item.vue
        |   |-- NewsList
        |   |   |-- index.vue
        |   |   |-- items
        |   |       |-- item_pic0.vue
        |   |       |-- item_pic1.vue
        |   |       |-- item_pic2.vue
        |   |       |-- item_pic3.vue
        |   |-- NoData
        |   |   |-- index.vue
        |   |-- NoMore
        |   |   |-- index.vue
        |   |-- Skeleton
        |       |-- index.vue
        |-- compositions
        |   |-- common.ts
        |   |-- detail.ts
        |   |-- home.ts
        |   |-- index.ts
        |   |-- mynews.ts
        |-- data
        |   |-- nav.ts
        |-- directives
        |   |-- index.ts
        |   |-- navCurrent.ts
        |-- lib
        |   |-- http.ts
        |-- router
        |   |-- index.ts
        |-- services
        |   |-- index.ts
        |-- store
        |   |-- index.ts
        |   |-- detail
        |   |   |-- actions.ts
        |   |   |-- axtionType.ts
        |   |   |-- index.ts
        |   |   |-- mutations.ts
        |   |   |-- state.ts
        |   |-- home
        |       |-- actions.ts
        |       |-- actionType.ts
        |       |-- index.ts
        |       |-- mutations.ts
        |       |-- state.ts
        |-- typings
        |   |-- common.ts
        |   |-- home.ts
        |   |-- index.ts
        |   |-- store.ts
        |-- views
            |-- Detail.vue
            |-- Home.vue
            |-- MyNews.vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

