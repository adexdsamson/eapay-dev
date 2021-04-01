module.exports = (data) => {
  return `
<html>
  <head>
    <style type="text/css">
      body, p, div {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
      }
      a {
        text-decoration: none;
      }
    </style>
    <title></title>
  </head>
  <body>
  <center>
    <p>
    <p>
      The verification code is: <strong>${data}</strong>
    </p>
  </center>
  </body>
</html>`;
};
