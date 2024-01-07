> package.json is a configuration for npm
> dependencies **package -> bundler

```
npm init 
creates package.json

npm install -D parcel
this is installing parcel from npm node modules folder will also get creates
dev(used during development) and normal dependencies(used in production also)
-D : we need it as dev dependencies
package-lock.json creates
```

>   "parcel": "^2.11.0" 
> "^" means update, if a new version came it will automatically update to every new minor updated verison, 
> "~" but if we put this means it will only upgrade to major verions only

> package-lock.json: keeps the track of exact version of package/dependencies


> now start/ignite our app by npx parcel index.html command

> if you want to install a package use npm, but if you want to execute a package use npx
> parcel goe to the source(index.html) and  build a development build for our app, and host that development build in  our localhost1234 

> download react and react-dom in our project 
npm install react, npm install react-dom

 and import these

 ### in index.html file we have linked app.js like "<script src="myscripts.js"></script>" but app.js is in react is a module, so we need to tell the type "<script type= "module" src="myscripts.js"></script>"

 # parcel is bundle
 - Dev build
 - local server
 - HMR = hot module replacement (automatically refreshes)
 - file watching algo in c++(building it again and again on every change)
 - caching-faster build
 - image optimization
 - minification of file buudeling compression of files
 - compress
 - consisting hashing
 - code splitting
 - differential bundeling - support older browsers
 - error handling
 - host on https
 - tree shaking algo(if using 4/5 function, it will remove unused code for u)
 - read parcel documentation
 

> npx parcel build index build (prod build)
> npx parcel index.html (dev build)

> in your package.json you can give browser lists

# we will build a script instead of writing "npx parcel index.html" command repeatidely
