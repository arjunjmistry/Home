const allPages = document.getElementsByClassName ('hide')

const MigrationInfo = document.getElementById ('MigrationInfo')
Migration.onclick = function () {
  if(MigrationInfo.classList!='hide') {MigrationInfo.classList.add('hide')} else {
  MigrationInfo.classList.remove('hide')}
}

const PetDeathsInfo = document.getElementById ('PetDeathsInfo')
PetDeaths.onclick = function () {
  if(PetDeathsInfo.classList!='hide') {PetDeathsInfo.classList.add('hide')} else {
  PetDeathsInfo.classList.remove('hide')}
}