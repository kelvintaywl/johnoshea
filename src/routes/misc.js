module.exports = {
  index: function (req, res) {
    const url = 'https://www.youtube.com/watch?v=OTBIHwW-pqs';
    res.send(`Check out <a href="${url}">his skills</a>`);
  }
}
