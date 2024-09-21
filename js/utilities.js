
function showSectionById (id){
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('show-cash-out').classList.add('hidden');
    document.getElementById('show-transaction').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}