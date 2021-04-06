module.exports = (data) => {
  const URL =
    process.env.NODE_ENV === "production"
      ? process.env.ROOT_URL
      : "http://localhost:5001";
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
        Follow this link to reset your password
      </p>
      <p>
      <a href=${URL}/reset_password/${data}>here</a>
      </p>
    </center>
    </body>
  </html>`;
};
