function playerDataMapper(data) {
  try {
    return utils.merge(data, {
      playerId              : data.Person.Code,
      personName            : {
        name                 : data.Person.Name,
        alias                : data.Person.Alias,
        aliasRaw             : data.Person.AliasRaw,
        passportName         : data.Person.PassportName,
        passportSurname      : data.Person.PassportSurname,
      },
      teamId                : data.Club.Code,
      teamName              : data.Club.Name,
      birthDate             : data.Person.BirthDate,
      jerseyNumber          : data.Person.JerseyName,
      height                : data.Person.Height,
      weight                : data.Person.Weight,
      active                : true, // Assuming active status is true for all players in this dataset
    });
  } catch (error) {
    app.jobs.logJob("playerDataMapper", "failed", {
      data      : data,
      errorStack: error.stack || null,
      error     : error || null
    });
  }
}

module.exports = {
  playerDataMapper
};