desc("build jade to html");
task("pug", function() {
    jake.exec("pug pug/index.pug --out ../docs/");
    jake.exec("pug pug/about.pug --out ../docs/");
//    jake.exec("pug pug/ --out ../docs/");
});


desc("SCSS");
task("scss", function() {
    jake.exec("sass --update scss:../docs --style expanded");
});


desc("build");
task("build", ["pug", "scss"], function() {
});
