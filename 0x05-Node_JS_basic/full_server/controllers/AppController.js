/**
 * Contains the miscellaneous route handlers.
 * @author Kenneth Afegbai A <https://github.com/kennethafegbai>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
