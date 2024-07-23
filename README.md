# SuperHeroUI with MongoDB database and .NET api

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## How to use this app

Run

1. Clone this repo to your local machine.
2. npm install in the terminal of your IDE.
3. `npm run ng serve` or `ng serve` depending on your cli to run the app
4. A page with title "SuperHero Database App" should now be accessible at `http://localhost:4200/`
5. Use the numbered buttons to select number of cards to show per page, and which page to show.
6. Use "Create New Hero" button to create a new hero. The hero must have a name of at least 3 characters (form validation will prevent you from submitting if you don't enter a name).
7. The new hero should appear at the end of the list (last page)
8. To edit a hero, click the "Edit" button within the hero card. A similar form to the Create New Hero form, will appear, but with pre-populated data of that hero. Editing a hero will update immediately, and you can click a page number to refresh the list.
9. Delete button will delete that hero from the database immediately and can be seen by clicking a page number to refresh the list.

\*Note: to populate the page with SuperHero data you need to also clone SuperHeroAPI(.NET api) to the same local machine as SuperHeroUI and run that with `dotnet run` in VSCODE, or selecting "Run without debugging" (CTRL-F5) Visual Studio 2022.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
