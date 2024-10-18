function playerDataMapper(data) {
  const positionName = data.position;
  delete data.position;
  try {
    return utils.merge(data, {
      playerId : data.playerId,
      personName : personNameMapper(data),
      teamId : data.teamId,
      teamName : data.teamName,
      dfepBirthDate : data.dfepBirthDate,
      birthDate : data.birthDate,
      jerseyNumber : data.jerseyNumber,
      position : data.position,
      positionName : positionName,
      images : data.images,
      height : data.height,
      weight : data.weight,
      country : countryMapper(data),
      birthCountry : countryMapper(data),
      social : data.social,
      externalId : data.externalId,
      active : data.active,
      startDate : data.startDate,
      endDate : data.endDate,
      jerseyName : data.jerseyName,
      abbreviatedName : data.abbreviatedName,
      dorsalRaw : data.dorsalRaw,
      lastTeam : data.lastTeam,
      teamCity : data.teamCity,
      teamAbbreviation : data.teamAbbreviation,
      teamIsDefunct : data.teamIsDefunct,
      lastAffiliation : data.lastAffiliation,
      lastAffiliationType : data.lastAffiliationType,
      draftYear : data.draftYear,
      draftRound : data.draftRound,
      draftNumber : data.draftNumber,
      fromYear : data.fromYear,
      toYear : data.toYear,
      age : data.age,
      seasonExperience : data.seasonExperience,
      school : data.school,
      gender : data.gender,
      dominantHand : data.dominantHand,
      dominantFoot : data.dominantFoot,
      sportClass : data.sportClass,
      internationalReference : data.internationalReference,
      keywords : data.keywords,
      updated : data.updated,
      hide : data.hide,
    });
  } catch (error) {
    app.jobs.logJob("playersDataMapper", "failed", {
      data : data,
      errorStack: error.stack || null,
      error : error || null
    });
  }
}

function personNameMapper(data) {
  try {
    return utils.merge({}, {
      name : data.personName.name,
      firstName : data.personName.firstName,
      lastName : data.personName.lastName,
      tvName : data.personName.tvName,
      scoreboardName : data.personName.scoreboardName,
      internationalFirstName : data.personName.internationalFirstName,
      internationalFamilyName : data.personName.internationalFamilyName,
      namePronunciation : data.personName.namePronunciation,
      alias : data.personName.alias,
      aliasRaw : data.personName.aliasRaw,
      passportName : data.personName.passportName,
      passportSurname : data.personName.passportSurname,
      abbreviatedName : data.personName.abbreviatedName,
    });
  } catch (error) {
    app.jobs.logJob("personNameMapper", "failed", {
      data : data,
      errorStack: error.stack || null,
      error : error || null
    });
  }
}

function countryMapper(data) {
  try {
    return utils.merge({}, {
      code : data.country.code,
      name : data.country.name,
      codeIoc: data.country.codeIoc,
    });
  } catch (error) {
    app.jobs.logJob("countryMapper", "failed", {
      data : data,
      errorStack: error.stack || null,
      error : error || null
    });
  }
}

module.exports = { playerDataMapper, };