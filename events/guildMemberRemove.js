module.exports = member => {
  let guild = member.guild;
  member.send('Niye Gittin Ki :(');
  guild.defaultChannel.sendMessage(`${member.user.username} Gitti.`);
};
